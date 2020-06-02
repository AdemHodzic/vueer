<template>
  <div>
    <BeerList />
    <div class="button--container py-2 px-4" v-if="!isLoading">
      <button v-if="currentPage !== 1"  class="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow" @click="loadPrevious()">
        Previous
      </button>
      <button class="button--container__next  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 ml-auto border border-gray-400 rounded shadow" @click="loadNext()">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import BeerList from '../components/BeerList'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    BeerList
  },
  computed: mapGetters(['currentPage', 'isLoading']),
  methods: {
    loadNext: function () {
      this.loadNextBeers()
    },
    loadPrevious: function () {
      this.loadPreviousBeers()
    },
    ...mapActions(['loadNextBeers', 'loadPreviousBeers'])
  }
}
</script>

<style lang="scss">
  .button--container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__next {
      align-self: flex-end;
    }
  }
</style>
