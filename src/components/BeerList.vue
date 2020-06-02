<template >
  <h1 v-if="isLoading" class="beerlist--loading">Loading...</h1>
  <div v-else class="beerlist--container">
    <div v-for="beer in allBeers" :key="beer.id" class=" flex flex-1 beerlist--list">
      <router-link :to="{name: 'BeerDetails', params: {id: beer.id}}" class=" flex flex-1">
        <BeerCard   :beer="beer" />
      </router-link>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import BeerCard from './BeerCard'

export default {
  name: 'BeerList',
  methods: {
    ...mapActions(['fetchBeers', 'updateCurrentBeer'])
  },
  computed: mapGetters(['allBeers', 'isLoading']),
  created () {
    this.fetchBeers()
  },
  components: {
    BeerCard
  }
}
</script>

<style lang="scss">
  .beerlist--container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 1rem;;

    @media screen and (max-width: 799px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
