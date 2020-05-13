<template>
  <div id="app">

    <nav-bar></nav-bar>

    <appliances-list
      :appliances="appliances"
      class="p-3">
    </appliances-list>

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
      loading: false,
      appliances: [],
    }
  },
  created () { this.fetch_appliances() },
  components: {
    'nav-bar': NavBar,
    'appliances-list': AppliancesList,
  },
  methods: {
    fetch_appliances: _.debounce(
      function () {
        this.loading = true
        axios
          .get(`https://appliances-spring.herokuapp.com/api/v1/appliances`)
          .then((response) => {
            this.appliances = response.data
            this.loading = false;
          })
          .catch((error) => {
            this.$emit('error_emitted', error)
            this.loading = false;
          })
      }, 200),
  },
}
</script>

<style>
</style>
