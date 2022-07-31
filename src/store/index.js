import { createStore } from 'vuex';

function getProducts() {
  const products = [
    {
      name: 'test1',
      price: '122'
    }
  ]

  const promise = new Promise( (resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 5000)
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
      } catch(err) {
        console.error(err);
      }
    }
  },
  modules: {
  }
})
