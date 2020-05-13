<template>
  <b-card
    :data-id="appliance.id"
    class="border">
    <b-card-text>

      <div class="float-right">
        <a href="" class="edit-button">
          <b-icon-pencil class="mr-2" />
        </a>
        <button type="button" class="close" aria-label="Close" @click="deleteAppliance">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-sm-4 form-label">
          S/N
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.id" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-sm-4 form-label">
          Brand
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.brand" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-sm-4 form-label">
          Model
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.model" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-sm-4 form-label">
          Status
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.status" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-sm-4 form-label">
          Date of Purchase
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.purchaseDate" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
  import ApiService from "@/services/ApiService"

  export default {
    name: 'ApplianceCard',
    props: {
      appliance: { type: Object },
      editable: { type: Boolean, default: false },
    },
    methods: {
      deleteAppliance() {
        if (confirm("Do you really want to delete this appliance?")) {
          ApiService
            .deleteAppliance(this.appliance.id)
            .then(() => { this.$emit('applianceDeleted', this.index) })
            .catch((error) => { alert(error) })
        }
      },
    }
  }
</script>

<style lang="scss">
  .edit-button {
    color: inherit;
    opacity: 0.6;

    &:hover {
      opacity: 1 !important;
    }
  }
</style>
