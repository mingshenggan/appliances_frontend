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
        <b-button class="ml-2 bg-primary" @click="addNewAppliance">Add</b-button>
      </div>
    </div>
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
          .catch((error) => { alert(error) })
      }, 200),
    search: _.debounce(
      function() {
        ApiService.fetchAppliances(this.query)
          .then((response) => { this.appliances = response.data })
          .catch((error) => { alert(error) })
      }, 100),
    removeAppliance(index) {
      this.appliances.splice(index, 1)
    },
    addNewAppliance() {
      this.appliances.push({})
      this.$nextTick(() => { window.scrollTo(0, document.body.scrollHeight) })
    }
  },
}
</script>

<style>
</style>
