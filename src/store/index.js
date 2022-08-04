import { createStore } from 'vuex';

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
      category: 'Beef',
      ingredients: ['Верхняя булка', 'Салат', 'Сыр', 'Соленые огурцы', 'Котлета', 'Нижняя булка']
    },
    {
      id: 2,
      name: 'Бургер №1',
      price: '12',
      image: 'burger-beef/burger-beacon.png',
      shortDescription: 'Лидеры не должны кому-то что-то доказывать',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      category: 'Beef',
      ingredients: ['Верхняя булка']
    },
    {
      id: 3,
      name: 'GangBurger',
      price: '8',
      image: 'burger-beef/burger-black.png',
      shortDescription: 'Ты забрел не в тот район, парень',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      id: 4,
      name: 'Hip-Hop',
      price: '10',
      image: 'burger-beef/burger-black-2.png',
      shortDescription: 'DJ, дай мне звук',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      id: 5,
      name: 'Особо опасен',
      price: '9',
      image: 'burger-beef/burger-black-3.png',
      shortDescription: 'Наш самый крепкий орешек',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      id: 6,
      name: 'BBB',
      price: '10',
      image: 'burger-beef/burger-black-4.png',
      shortDescription: 'Big Black Burger',
      description: 'description',
      count: 1,
      canPayForEBalls: false,
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
      category: 'Напитки',
      ingredients: ['Верхняя булка']
    }
  ]

  // server response imitation
  const promise = new Promise( (resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500)
  })
  return promise;
}

export default createStore({
  state: {
    noticeOnShowCaseWasClosed: false,
    products: [],
    inCart: []
  },
  getters: {
    productInCart: state => id => {
      return state.inCart.filter(el => el.id === id);
    },
    totalCartPrice: state => {
      if ( state.inCart.length ) {
        return state.inCart.reduce((total, current) => Number(total) + Number(current.price) * Number(current.count), 0);
      } else {
        return 0;
      }
    }
  },
  mutations: {
    CLOSE_NOTICE_SHOWCASE(state) {
      state.noticeOnShowCaseWasClosed = true
    },
    SET_PRODUCTS(state, info) {
      state.products = info;
    },
    ADD_PRODUCT_TO_CART(state, product) {
      let search = state.inCart.filter(el => el.id === product.id);
      if (search.length) {
        search[0].count++;
      } else {
        state.inCart.push(product);
      }
    },
    MINUS_COUNT_IN_CART(state, id) {
      const idx = state.inCart.findIndex(el => el.id == id);
      if (state.inCart[idx].count == 1) {
        state.inCart.splice(idx, 1);
      } else {
        state.inCart[idx].count--;
      }
    },
    PLUS_COUNT_IN_CART(state, id) {
      state.inCart.find(el => el.id == id).count++;
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        let apiResult = await getProducts();
        commit('SET_PRODUCTS', apiResult);
        return 'DONE';
      } catch(err) {
        console.error(err);
      }
    },
  },
  modules: {
  }
})
