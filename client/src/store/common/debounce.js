export const debounceState = () => ({
  timer: null
});

export const debounceMutations = () => ({
  setTimer(state, payload) {
    state.timer = payload;
  }
});

export const debounceActions = () => ({
  debounce({state, commit}, payload = 1000) {
    clearTimeout(state.timer);

    return new Promise(resolve => {
      const timer = setTimeout(() => {
        commit('setTimer', null);
        resolve();
      }, payload);

      commit('setTimer', timer);
    });
  }
});