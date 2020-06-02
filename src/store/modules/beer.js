import axios from 'axios'

const BASE_URL = 'https://api.punkapi.com/v2/beers'

const state = {
  loading: true,
  beers: [],
  currentBeer: null,
  page: 1
}

const getters = {
  allBeers: state => state.beers,
  isLoading: state => state.loading,
  currentBeer: state => state.currentBeer,
  currentPage: state => state.page
}

const actions = {
  async fetchBeers ({ commit, state }) {
    commit('setLoading', true)
    const { page } = state
    const response = await axios.get(BASE_URL, {
      params: {
        page
      }
    })

    commit('setBeers', response.data)
    commit('setLoading', false)
  },
  async updateCurrentBeer ({ commit, state }, id) {
    const beer = state.beers.find(el => el.id === id)
    commit('setCurrentBeer', beer)
  },
  resetCurrentBeer ({ commit }) {
    commit('setCurrentBeer', null)
  },
  loadNextBeers ({ commit, state, dispatch }) {
    commit('setPage', state.page + 1)
    dispatch('fetchBeers')
  },
  loadPreviousBeers ({ commit, state, dispatch }) {
    commit('setPage', state.page - 1)
    dispatch('fetchBeers')
  }
}

const mutations = {
  setLoading: (state, loading) => (state.loading = loading),
  setBeers: (state, beers) => (state.beers = beers),
  setCurrentBeer: (state, currentBeer) => (state.currentBeer = currentBeer),
  setPage: (state, page) => (state.page = page)
}

export default {
  state,
  getters,
  actions,
  mutations
}
