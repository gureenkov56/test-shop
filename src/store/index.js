import {createStore} from 'vuex';
import router from '../router/index'

export default createStore({
  state: {
    noticeOnShowCaseWasClosed: false,
    products: [],
    inCart: [],
    orders: [
      {
        id: 999,
        totalPrice: 1250,
        status: 'wait',
        createdByUserId: 1,
        products: [1]
      },
      {
        id: 888,
        totalPrice: 2100,
        status: 'canceled',
        createdByUserId: 1,
        products: [2, 4]
      },
      {
        id: 777,
        totalPrice: 1300,
        status: 'done',
        products: [5]
      }
    ],
    userList: [
      {
        id: 1,
        role: 'client',
        login: 'user',
        password: 'user',
        name: 'Полковник Сандерс',
        avatarSrc: 'http://biographe.ru/wp-content/uploads/2018/01/2-103.jpg',
        ordersHistory: [
          {
            id: 999,
            totalPrice: 1250,
            status: 'wait',
            products: [5]

          },
          {
            id: 888,
            totalPrice: 2100,
            status: 'canceled',
            products: [5]

          },
          {
            id: 777,
            totalPrice: 1300,
            status: 'done',
            products: [5]

          }
        ]
      },
      {
        id: 2,
        role: 'manager',
        login: 'manager',
        password: 'manager',
        name: 'Кейт Лебовски',
        avatarSrc: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/takes-aim-big-labor-problem.jpg?itok=V1ySVMQ7',
      },
    ],
    user: undefined
  },
  getters: {
    productInCart: state => id => {
      return state.inCart.filter(el => el.id == id);
    },
    productInState: state => id => {
      return state.products.filter(el => el.id == id);
    },
    totalCartPrice: state => {
      if (state.inCart.length) {
        return state.inCart.reduce((total, current) => Number(total) + Number(current.price) * Number(current.count), 0);
      } else {
        return 0;
      }
    },
    lastOrderID: state => {
      return state.orders.length ? state.orders[state.orders.length - 1].id : 'null';
    },
    activeOrder : state => {
      return state.orders.filter(el => el.status === 'wait');
    },
    inactiveOrder: state => {
      return state.orders.filter(el => el.status !== 'wait');
    },
    getProductsArrByIDArr: state => idArr => {
      let res = [];
      for (let idInArr of idArr) {
        res.push(state.products.find(el => el.id === idInArr).name);
      }
      return res;
    }
  },
  mutations: {
    CLOSE_NOTICE_SHOWCASE(state) {
      state.noticeOnShowCaseWasClosed = true
    },
    SET_PRODUCTS(state, info) {
      state.products = info;
    },
    ADD_PRODUCT_TO_CART(state, id) {
      let search = state.inCart.filter(el => el.id === id);
      if (search.length) {
        search[0].count++;
      } else {
        let product = state.products.filter(el => el.id == id)[0]
        state.inCart.push(product);
      }
      if (sessionStorage.getItem('inCart')) {
        let inCartId = sessionStorage.getItem('inCart');
        inCartId += `${id},`;
        sessionStorage.setItem('inCart', inCartId);
      } else {
        sessionStorage.setItem('inCart', `${id},`);
      }
    },
    MINUS_COUNT_IN_CART(state, id) {
      const idx = state.inCart.findIndex(el => el.id == id);
      if (state.inCart[idx].count == 1) {
        state.inCart.splice(idx, 1);
      } else {
        state.inCart[idx].count--;
      }
      let inCartId = sessionStorage.getItem('inCart');
      inCartId = inCartId.replace(`${id},`, '');
      sessionStorage.setItem('inCart', inCartId);
    },
    PLUS_COUNT_IN_CART(state, id) {
      state.inCart.find(el => el.id == id).count++;
      let inCartId = sessionStorage.getItem('inCart');
      inCartId += `${id},`;
      sessionStorage.setItem('inCart', inCartId);
    },
    ADD_EXCLUDED_INGREDIENT(state, params) {
      params[0].excludedIngredients.push(params[1]);
    },
    REMOVE_EXCLUDED_INGREDIENT(state, params) {
      params[0].excludedIngredients = params[0].excludedIngredients.filter(el => el != params[1]);
    },
    CLEAN_CART(state) {
      state.inCart.length = 0;
      sessionStorage.removeItem('inCart');
    },
    AUTH_USER(state, user) {
      state.user = user;
    },
    LOGOUT_USER(state) {
      state.user = null;
      router.push('/');
    },
    CHANGE_ORDER_STATUS(state, params) {
      let order = state.orders.find(ord => ord.id === params.id);
      order.status = params.newStatus;
    }
  },
  actions: {
    async getProducts({commit, getters}) {
      try {
        let apiResult = await getProducts();
        commit('SET_PRODUCTS', apiResult);

        if (sessionStorage.getItem('inCart')) {
          let inCartSessionStorageArr = sessionStorage.getItem('inCart').split(',');
          sessionStorage.removeItem('inCart');
          inCartSessionStorageArr.forEach(id => {
            let product = getters.productInState(id)[0];
            if (product) {
              commit('ADD_PRODUCT_TO_CART', id)
            }
          })
        }

        return 'DONE';
      } catch (err) {
        console.error(err);
      }
    },
    createNewOrder({getters, state}) {
      let newID = state.orders.length ? state.orders[state.orders.length - 1].id + 1 : 1;


      state.orders.unshift({
        id: newID,
        products: state.inCart.map(el => el.id),
        paid: false,
        totalPrice: getters.totalCartPrice,
        status: 'wait'
      });
      if (state.user && state.user.role === 'client') {
        state.user.ordersHistory.unshift({
          id: newID,
          totalPrice: getters.totalCartPrice,
          status: 'wait'
        })
      }
    },
    loginSubmit({state, commit}, params) {
      let auth = state.userList.find(user => user.login == params.login && user.password == params.password);
      if (auth) {
        commit('AUTH_USER', auth);
        router.push('/profile');
      }
    }
  },
  modules: {}
})

function getProducts() {
  const products = [
    {
      id: 1,
      name: 'Минибургер',
      price: '4',
      image: 'burger-beef/burger-1floor.png',
      shortDescription: 'Миникупер в мире бургеров',
      description: 'Мягкая булочка разогрета в микроволновке, да, но котлета то сделана с любовью. За это мы его и любим.',
      count: 1,
      canPayForEBalls: true,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Beef',
      ingredients: ['Верхняя булка', 'Салат', 'Сыр', 'Соленые огурцы', 'Котлета', 'Нижняя булка']
    },
    {
      id: 2,
      name: 'Бургер №1',
      price: '12',
      image: 'burger-beef/burger-beacon.png',
      shortDescription: 'Лидеры не должны кому-то что-то доказывать',
      description: 'Когда ты №1, ты знаешь, что ты №1. И все вокруг знают. Они знают, что ты №1!',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Beef',
      ingredients: ['Верхняя булка']
    },
    {
      id: 3,
      name: 'GangBurger',
      price: '8',
      image: 'burger-beef/burger-black.png',
      shortDescription: 'Ты забрел не в тот район, парень',
      description: 'Может содержать следы пороха и свинца (металл такой, не мясо)',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      id: 4,
      name: 'Hip-Hop',
      price: '10',
      image: 'burger-beef/burger-black-2.png',
      shortDescription: 'DJ, дай мне звук',
      description: 'Не забывай свои корни, помни - есть вещи на порядок выше. Слышишь?',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      id: 5,
      name: 'Особо опасен',
      price: '9',
      image: 'burger-beef/burger-black-3.png',
      shortDescription: 'Наш самый крепкий орешек',
      description: 'Особо опасен, так как вызывает привыкание. Мы бы не советовали привыкать, но уже сами привыкли.',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      id: 6,
      name: 'BBB',
      price: '10',
      image: 'burger-beef/burger-black-4.png',
      shortDescription: 'Big Black Burger',
      description: 'Порадуй свою бабушку. Большой черный босс, ягодный морс и картошечка помогут тебе набрать пару-тройку кило.',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      id: 7,
      name: 'Твой старший',
      price: '11',
      image: 'burger-beef/burger-empire-state.png',
      shortDescription: 'Ты знаешь, кому звонить, если сам заморосил',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      id: 8,
      name: 'Добрый',
      price: '9',
      image: 'burger-chicken/burger-chicken.png',
      shortDescription: 'Не пострадала ни одна курица',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Курица',
      ingredients: ['Верхняя булка']
    },
    {
      id: 9,
      name: 'Менее добрый',
      price: '13',
      image: 'burger-chicken/burger-chicken-long.png',
      shortDescription: 'Омлет не сделать, не разбив яиц',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Курица',
      ingredients: ['Верхняя булка']
    },
    {
      id: 10,
      name: 'Mr. Fisher',
      price: '8',
      image: 'burger-fish/burger-fish.png',
      shortDescription: 'Важный дядя с приставкой мистер',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Рыба',
      ingredients: ['Верхняя булка']
    },
    {
      id: 11,
      name: 'Посейдон',
      price: '10',
      image: 'burger-fish/burger-fish2.png',
      shortDescription: 'Король в мире морском на дне самом',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Рыба',
      ingredients: ['Верхняя булка']
    },
    {
      id: 12,
      name: 'Двое из ларца',
      price: '15',
      image: 'combo/combo-2burgers.png',
      shortDescription: 'И так сойдет...',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      id: 13,
      name: 'Це смак',
      price: '17',
      image: 'combo/combo-2burgers-1potato.png',
      shortDescription: 'И что еще нужно для счастья?',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      id: 14,
      name: 'Герой',
      price: '15',
      image: 'combo/combo-big-burger-potato-cola-chicken.png',
      shortDescription: 'Съел в одного? Родина тобой гордится, сынок!',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      id: 15,
      name: 'Детство',
      price: '10',
      image: 'combo/combo-burger-chicken-chicken-potato-cola.png',
      shortDescription: 'Самое прекрасное воспоминание в жизни',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      id: 16,
      name: 'Вишенка',
      price: '10',
      image: 'combo/combo-burger-chicken-potato-cola.png',
      shortDescription: 'Вишенка на всем этом торте',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      id: 17,
      name: 'Dr. Pepper',
      price: '9',
      image: 'combo/combo-chicken-burger-potato-cola.png',
      shortDescription: 'Не Dre, конечно, но тоже доктор',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      id: 18,
      name: 'Coca Cola',
      price: '2',
      image: 'drinks/cola-500.png',
      shortDescription: 'Не нуждается в представлении',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Напитки',
      ingredients: ['Верхняя булка']
    },
    {
      id: 19,
      name: 'Fanta',
      price: '2',
      image: 'drinks/fanta-500.png',
      shortDescription: 'Нуждается в представлении',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Напитки',
      ingredients: ['Верхняя булка']
    },
    {
      id: 20,
      name: 'Sprite',
      price: '2',
      image: 'drinks/sprite-500.png',
      shortDescription: 'Как лимончелло у дедушки в деревне',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      showIngredients: false,
      excludedIngredients: [],
      category: 'Напитки',
      ingredients: ['Верхняя булка']
    }
  ]

  // server response imitation
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500)
  })
  return promise;
}

