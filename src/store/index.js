import { createStore } from 'vuex';

function getProducts() {
  const products = [
    {
      name: 'Минибургер',
      price: '4',
      image: 'burger-beef/burger-1floor.png',
      shortDescription: 'Миникупер в мире бургеров',
      description: 'description',
      canPayForEBalls: true,
      category: 'Beef',
      ingredients: ['Верхняя булка', 'Салат', 'Сыр', 'Соленые огурцы', 'Котлета', 'Нижняя булка']
    },
    {
      name: 'Бургер №1',
      price: '12',
      image: 'burger-beef/burger-beacon.png',
      shortDescription: 'Лидеры не должны кому-то что-то доказывать',
      description: 'description',
      canPayForEBalls: false,
      category: 'Beef',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'GangBurger',
      price: '8',
      image: 'burger-beef/burger-black.png',
      shortDescription: 'Ты забрел не в тот район, парень',
      description: 'description',
      canPayForEBalls: false,
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Hip-Hop',
      price: '10',
      image: 'burger-beef/burger-black-2.png',
      shortDescription: 'DJ, дай мне звук',
      description: 'description',
      canPayForEBalls: false,
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Особо опасен',
      price: '9',
      image: 'burger-beef/burger-black-3.png',
      shortDescription: 'Наш самый крепкий орешек',
      description: 'description',
      canPayForEBalls: false,
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'BBB',
      price: '10',
      image: 'burger-beef/burger-black-4.png',
      shortDescription: 'Big Black Burger',
      description: 'description',
      canPayForEBalls: false,
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Твой старший',
      price: '11',
      image: 'burger-beef/burger-empire-state.png',
      shortDescription: 'Ты знаешь, кому звонить, если сам заморосил',
      description: 'description',
      canPayForEBalls: false,
      category: 'Black',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Добрый',
      price: '9',
      image: 'burger-chicken/burger-chicken.png',
      shortDescription: 'Не пострадала ни одна курица',
      description: 'description',
      canPayForEBalls: false,
      category: 'Курица',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Менее добрый',
      price: '13',
      image: 'burger-chicken/burger-chicken-long.png',
      shortDescription: 'Омлет не сделать, не разбив яиц',
      description: 'description',
      canPayForEBalls: false,
      category: 'Курица',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Mr. Fisher',
      price: '8',
      image: 'burger-fish/burger-fish.png',
      shortDescription: 'Важный дядя с приставкой мистер',
      description: 'description',
      canPayForEBalls: false,
      category: 'Рыба',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Посейдон',
      price: '10',
      image: 'burger-fish/burger-fish2.png',
      shortDescription: 'Король в мире морском на дне самом',
      description: 'description',
      canPayForEBalls: false,
      category: 'Рыба',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Двое из ларца',
      price: '15',
      image: 'combo/combo-2burgers.png',
      shortDescription: 'И так сойдет...',
      description: 'description',
      canPayForEBalls: false,
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Це смак',
      price: '17',
      image: 'combo/combo-2burgers-1potato.png',
      shortDescription: 'И что еще нужно для счастья?',
      description: 'description',
      canPayForEBalls: false,
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Герой',
      price: '15',
      image: 'combo/combo-big-burger-potato-cola-chicken.png',
      shortDescription: 'Съел в одного? Родина тобой гордится, сынок!',
      description: 'description',
      canPayForEBalls: false,
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Детство',
      price: '10',
      image: 'combo/combo-burger-chicken-chicken-potato-cola.png',
      shortDescription: 'Самое прекрасное воспоминание в жизни',
      description: 'description',
      canPayForEBalls: false,
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Вишенка',
      price: '10',
      image: 'combo/combo-burger-chicken-potato-cola.png',
      shortDescription: 'Вишенка на всем этом торте',
      description: 'description',
      canPayForEBalls: false,
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Dr. Pepper',
      price: '9',
      image: 'combo/combo-chicken-burger-potato-cola.png',
      shortDescription: 'Не Dre, конечно, но тоже доктор',
      description: 'description',
      canPayForEBalls: false,
      category: 'Комбо',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Coca Cola',
      price: '2',
      image: 'drinks/cola-500.png',
      shortDescription: 'Не нуждается в представлении',
      description: 'description',
      canPayForEBalls: false,
      category: 'Напитки',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Fanta',
      price: '2',
      image: 'drinks/fanta-500.png',
      shortDescription: 'Нуждается в представлении',
      description: 'description',
      canPayForEBalls: false,
      category: 'Напитки',
      ingredients: ['Верхняя булка']
    },
    {
      name: 'Sprite',
      price: '2',
      image: 'drinks/sprite-500.png',
      shortDescription: 'Как у дедушки в деревне лимончелло',
      description: 'description',
      canPayForEBalls: false,
      category: 'Напитки',
      ingredients: ['Верхняя булка']
    }
  ]

  const promise = new Promise( (resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000)
  })
  return promise;
}

export default createStore({
  state: {
    noticeOnShowCaseWasClosed: false,
    products: []
  },
  getters: {
  },
  mutations: {
    CLOSE_NOTICE_SHOWCASE(state) {
      state.noticeOnShowCaseWasClosed = true
    },
    SET_PRODUCTS(state, info) {
      state.products = info;
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
    }
  },
  modules: {
  }
})
