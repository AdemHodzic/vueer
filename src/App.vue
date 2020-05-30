<template>
<div>

  <Nav />
  <div id="app bg-gray-800">
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

</style>
