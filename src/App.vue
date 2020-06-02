<template>
<div class="vueer--container">
  <Nav />
  <div id="app">
    <router-view/>
  </div>
</div>
</template>

<script>

import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">

  .vueer--container {
    height: 100%;
  }

  Nav {
    height: 10%;
  }

  #app {
    height: 90%;
  }
</style>
