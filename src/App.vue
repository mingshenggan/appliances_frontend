<template>
  <div>
    <TheHeader></TheHeader>
    <b-container class="p-0 pt-3">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader'

  export default {
    name: 'App',
    components: {
      TheHeader,
    }
  }
</script>

<style>
</style>
