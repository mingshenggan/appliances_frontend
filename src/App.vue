<template>
  <div id="app">

    <nav-bar></nav-bar>

    <appliances-list :appliances="appliances" class="p-3"></appliances-list>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import AppliancesList from '@/components/AppliancesList'
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'App',
  data () {
    return {
      appliances: [],
    }
  },
  components: {
    'nav-bar': NavBar,
    'appliances-list': AppliancesList,
  },
  methods: {
    fetch_appliances: _.debounce(
      function () {
        axios
          .get(`https://appliances-spring.herokuapp.com/api/v1/appliances`)
          .then((response) => {
            this.appliances = response.data
          })
          .catch((error) => {
            this.$emit('error_emitted', error)
          })
      }, 200),
  },
  created: function () { this.fetch_appliances() }
}
</script>

<style>
</style>
