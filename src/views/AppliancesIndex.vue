<template>
  <div>
    <h1>Hello World</h1>
    {{ this.appliances }}
  </div>
</template>

<script>
import ApiService from "@/services/ApiService"
import _ from "lodash"

export default {
  name: 'AppliancesIndex',
  data () {
    return {
      appliances: [],
    }
  },
  created () { this.fetch_appliances() },
  components: {},
  methods: {
    fetch_appliances: _.debounce(
      function () {
        ApiService.fetchAppliances()
          .then((response) => {
            console.log(response)
            this.appliances = response.data })
          .catch((error) => { alert(error) })
      }, 200),
  },
}
</script>

<style>
</style>
