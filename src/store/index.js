import Vue from 'vue'
import Vuex from 'vuex'
import beer from './modules/beer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    beer
  }
})
