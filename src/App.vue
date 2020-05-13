<template>
  <div id="app">

    <nav-bar></nav-bar>

    <b-container fluid>
      <appliances-list :appliances="appliances" class="p-3"></appliances-list>
    </b-container>

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
      appliances: [
        {
          "id": "fa5dae6b-2f34-4e3b-8952-8764c826c1a0",
          "serialNo": "Hello",
          "brand": "brand",
          "model": "model",
          "status": "status",
          "purchaseDate": "2020-01-01"
        },
        {
          "id": "4f501f51-a74e-4c5c-9e29-d5c299325d9d",
          "serialNo": "Hello",
          "brand": "brand",
          "model": "model",
          "status": "status",
          "purchaseDate": "2020-01-01"
        },
        {
          "id": "273bf8b7-7276-470d-918a-73f4cb13ec8d",
          "serialNo": "Hello",
          "brand": "brand",
          "model": "model",
          "status": "status",
          "purchaseDate": "2020-01-01"
        }
      ],
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
  }
}
</script>

<style>
</style>
