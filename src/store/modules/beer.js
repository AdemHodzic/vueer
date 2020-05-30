import axios from 'axios'

const BASE_URL = 'https://api.punkapi.com/v2/beers'

const state = {
  loading: true,
  beers: [],
  currentBeer: {}
}

const getters = {
  allBeers: state => state.beers,
  isLoading: state => state.loading,
  currentBeer: state => state.currentBeer
}

const actions = {
  async fetchBeers ({ commit }) {
    commit('setLoading', true)
    const response = await axios.get(BASE_URL)
    commit('setBeers', response.data)
    commit('setLoading', false)
  },
  updateCurrentBeer ({ commit, state }, id) {
    const beer = state.beers.find(el => el.id === id)
    commit('setCurrentBeer', beer)
  }
}

const mutations = {
  setLoading: (state, loading) => (state.loading = loading),
  setBeers: (state, beers) => (state.beers = beers),
  setCurrentBeer: (state, currentBeer) => (state.currentBeer = currentBeer)
}

export default {
  state,
  getters,
  actions,
  mutations
}
