import axios from '@/axios';
import {debounceState, debounceMutations, debounceActions} from '@/store/common/debounce';

export const initialState = (data) => ({
  url: '',
  items: [],
  tabs: [],
  selected: null,
  isLoading: false,
  error: '',
  ...data,
  ...debounceState()
});

export const initialMutations = () => ({
  ...debounceMutations(),
  setItems(state, payload) {
    state.items = payload;
  },
  setFetch(state, [isLoading, error]) {
    state.isLoading = isLoading;
    state.error = error ? error : '';
  },
  setTabs(state, payload) {
    state.tabs = payload;
  },
  setSelected(state, payload) {
    state.selected = payload;
  }
});

export const initialGetters = () => ({
  items: (state) => state.items,
  tabs: (state) => state.tabs,
  selected: (state) => state.selected,
  isLoading: (state) => state.isLoading,
  error: (state) => state.error
});

export const initialActions = () => ({
  ...debounceActions(),
  async fetchItems({state, commit}) {
    try {
      if (state.isLoading) return;

      commit('setFetch', [true, null]);

      const {data} = await axios.get(state.url);

      commit('setItems', data);
      commit('setFetch', [false]);
    } catch ({message}) {
      commit('setFetch', [false, message]);
    }
  },
  removeItem({state, commit}, payload) {
    const items = state.items.reduce((items, item) => {
      if (item.id !== payload) {
        if (item.children) {
          const children = item.children.filter(child => child.id !== payload);

          return [...items, {...item, children}];
        }

        return [...items, item];
      }

      return items;
    }, []);

    commit('setItems', items);
  },
  toggleTabs({state, commit}, payload) {
    const tabs = state.tabs.filter(v => v !== payload.id);

    if (payload.isActive) {
      tabs.push(payload.id);
    }

    commit('setTabs', tabs);
  },
  async updateSelected({commit, dispatch}, payload) {
    let id = payload.category ? [payload.category.id, payload.id] : payload.id;

    commit('setSelected', id);
    await dispatch('debounce', 3000);
    commit('setSelected', null);
  }
});