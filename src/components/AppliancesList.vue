<template>
  <div>
    <h1 class='mb-3'>Appliances List</h1>
    <div v-if='appliances.length > 0'>
      <b-row
        v-for='i in Math.ceil(appliances.length / appliances_per_row)'
        :key='i'>
        <appliance-card
          v-for='appliance in appliances.slice((i - 1) * appliances_per_row, i * appliances_per_row)'
          :item='appliance'
          :key='appliance.id'
          :appliance='appliance'
          class="pb-3 pl-3 pr-0"
          />
      </b-row>
    </div>
    <div class='d-flex w-100 h-20 justify-content-center' v-else>
      No appliances found
    </div>
  </div>
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
