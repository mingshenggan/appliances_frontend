<template>
  <div>
    <div class="d-flex justify-content-between">
      <h1>Appliances World</h1>
      <div class="d-flex h-100 mt-2">
        <b-form-input
          v-model='query'
          v-on:keyup='search'
          placeholder="Search appliances"
          />
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <b-button class="mb-2 bg-primary" @click="addNewAppliance">Add Appliance</b-button>
    </div>
    <div v-if='appliances.length > 0'>
      <ApplianceCard
        @applianceDeleted="removeAppliance"
        @applianceUpdated="refreshAppliance"
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
      query: "",
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
          .catch((error) => { alert(error.response.data.error) })
      }, 200),
    search: _.debounce(
      function() {
        ApiService.fetchAppliances(this.query)
          .then((response) => { this.appliances = response.data })
          .catch((error) => { alert(error.response.data.error) })
      }, 200),
    removeAppliance(index) {
      this.appliances.splice(index, 1)
    },
    addNewAppliance() {
      this.appliances.push({})
      this.$nextTick(() => { window.scrollTo(0, document.body.scrollHeight) })
    },
    refreshAppliance(applianceData, index) {
      this.$set(this.appliances, index, applianceData)
    },
  },
}
</script>

<style>
</style>
