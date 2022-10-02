import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      loading: true
    }
  },
  mutations: {
    changeLoading (state) {
      state.loading = !state.loading
    }
  },
  getters: {
    isLoading(state){
      return state.loading
    }
  }
})