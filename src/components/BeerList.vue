<template >
  <h1 v-if="isLoading"></h1>
  <div v-else>
    beer list
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BeerList',
  methods: {
    ...mapActions(['fetchBeers', 'updateCurrentBeer'])
  },
  computed: mapGetters(['allBeers', 'isLoading']),
  created () {
    this.fetchBeers()
  }
}
</script>

<style lang="scss">

</style>
