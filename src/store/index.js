import { createStore } from 'vuex'

export default createStore({
  state: {
    noticeOnShowCaseWasClosed: false
  },
  getters: {
  },
  mutations: {
    closeNoticeOnShowcase(state) {
      state.noticeOnShowCaseWasClosed = true
    }
  },
  actions: {
  },
  modules: {
  }
})
