export default {
  state: {
    tags: [
      {
        title: 'Comedy‎',
        use: false
      },
      {
        title: 'Westerns',
        use: false
      },
      {
        title: 'Adventure',
        use: false
      }
    ]
  },
  mutations: {
    addNewTag (store, payload) {
      store.tags.push(payload)
    }
  },
  actions: {
    newTag ({commit}, payload) {
      // Через commit отправляем в mutations
      commit('addNewTag', payload)
    }
  },
  getters: {
    tags (state) {
      return state.tags
    }
  }
}
