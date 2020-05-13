<template>
  <div>
    <h1>Hello World</h1>
    <div v-if='appliances.length > 0'>
      <ApplianceCard
        @applianceDeleted="removeAppliance"
        v-for='(appliance, i) in appliances'
        :item='appliance'
        :key='appliance.id'
        :index='i'
        :appliance='appliance'
        class="mb-2"
        />
    </div>
    <div class='d-flex w-100 h-20 justify-content-center' v-else>
      No appliances found
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService"
import ApplianceCard from "@/components/ApplianceCard"
import _ from "lodash"

export default {
  name: 'AppliancesIndex',
  data () {
    return {
      appliances: [],
    }
  },
  created () { this.fetch_appliances() },
  components: {
    ApplianceCard,
  },
  methods: {
    fetch_appliances: _.debounce(
      function () {
        ApiService.fetchAppliances()
          .then((response) => { this.appliances = response.data })
          .catch((error) => { alert(error) })
      }, 200),
    removeAppliance(index) {
      this.appliances.splice(index, 1)
    },
  },
}
</script>

<style>
</style>
