<template>
  <div class="beercard w-full">
    <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col">
      <img
        class="pt-1 md:w-full object-contain object-center flex-initial"
        :src="beer.image_url"
        alt="blog"
      />
      <div class="p-6 flex flex flex-col flex-1">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 flex-initial">{{beer.tagline}}</h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3 flex-initial">{{beer.name}}</h1>
        <div class="beercard--description flex flex-col flex-1 justify-between">
          <p
            class="leading-relaxed mb-3"
          >{{beer.description}}</p>
          <div class="flex items-center flex-wrap">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 learn-more">
              Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['beer'],
  name: 'BeerCard'
}
</script>

<style lang="scss">
  .learn-more {
    cursor: pointer;
  }

  .beercard {

    img {
      height: 48rem;

      @media screen and (max-width: 799px) {
        height: 14rem;
      }
    }

    &:hover {
      transition: all 0.3s ease-in-out;
      transform: translateY(-10px);
      box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.25);
      cursor: pointer;
    }
  }

</style>
