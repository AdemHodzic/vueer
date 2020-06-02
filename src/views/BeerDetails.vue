<template>
  <div class="beerdetails--container flex flex-1 items-center justify-center pt-1">
    <section class="text-gray-700 body-font overflow-hidden" v-if="currentBeer">
      <div class="container">
        <div class="flex md:flex-row flex-col-reverse p-4">
          <div class="flex-1 p-2 md:p-0">
            <h3 class="text-sm title-font text-gray-500 tracking-widest">{{ currentBeer.tagline }}</h3>
            <h2 class="text-gray-900 text-3xl title-font font-medium mb-4">{{ currentBeer.name }}</h2>
            <p class="leading-relaxed mb-4">{{ currentBeer.description }}</p>
            <div class="flex border-t border-gray-300 py-2"><span class="text-gray-500">ABV</span><span
                class="ml-auto text-gray-900">{{ currentBeer.abv }}</span></div>
            <div class="flex border-t border-gray-300 py-2"><span class="text-gray-500">IBU</span><span
                class="ml-auto text-gray-900">{{ currentBeer.ibu }}</span></div>
            <div class="flex border-t border-b mb-6 border-gray-300 py-2"><span
                class="text-gray-500">EBC</span><span class="ml-auto text-gray-900">{{ currentBeer.ebc }}</span></div>
          </div>
          <img alt="ecommerce" class="beerdetails--image object-contain object-center rounded md:flex-1" :src="currentBeer.image_url">
        </div>
      </div>
    </section>
    <h2 v-else>Loading...</h2>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BeerDetails',
  computed: mapGetters(['currentBeer']),
  methods: {
    ...mapActions(['updateCurrentBeer', 'resetCurrentBeer'])
  },
  created () {
    const id = this.$route.params.id
    this.updateCurrentBeer(id)
  }
}
</script>

<style lang="scss">

  .beerdetails--container {
   height: auto;

    @media screen and(max-width: 599px) {
      height: auto;
    }
  }
  .beerdetails--image {
    height: 20rem;

    @media screen and(max-width: 599px) {
      height: 14rem;
    }
  }
</style>
