<template>
  <b-container>
    <div class="d-flex flex-row justify-content-between">
      <h1 class='mb-1'>Appliances List</h1>
      <b-button align-v="center" class="h-100 mt-2" variant="primary">Add</b-button>
    </div>
    <hr>
    <div v-if='appliances.length > 0'>
      <appliance-card
        v-for='appliance in appliances'
        :item='appliance'
        :key='appliance.id'
        :appliance='appliance'
        class="mb-2"
        />
    </div>
    <div class='d-flex w-100 h-20 justify-content-center' v-else>
      No appliances found
    </div>
  </b-container>
</template>

<script>
  import ApplianceCard from '@/components/ApplianceCard'

  export default {
    name: 'appliances_list',
    data () {
      return {
        appliances_per_row: 2
      }
    },
    components: {
      'appliance-card': ApplianceCard
    },
    props: {
      appliances: { type: Array },
    },
  }
</script>

<style lang="scss">
</style>
