import {initialState, initialMutations, initialGetters, initialActions} from '@/store/documents';

export default {
  namespaced: true,
  state: {
    ...initialState({
      url: '/documents-nested'
    })
  },
  mutations: {
    ...initialMutations()
  },
  getters: {
    ...initialGetters()
  },
  actions: {
    ...initialActions()
  }
}