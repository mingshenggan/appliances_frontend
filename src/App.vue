<template>
  <div id="app">

    <nav-bar></nav-bar>

    <router-view></router-view>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  data () {
    return {
      loading: false,
    }
  },
  components: {
    'nav-bar': NavBar,
  },
}
</script>

<style>
</style>
