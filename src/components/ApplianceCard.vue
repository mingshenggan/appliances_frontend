<template>
  <b-card
    :data-id="appliance.id"
    class="border">
    <b-card-text>

      <div class="row">
        <label for="serialNo" class="col-sm-4 form-label">
          S/N
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.id" plaintext readonly></b-form-input>
        </div>
      </div>

      <div class="row">
        <label for="serialNo" class="col-sm-4 form-label">
          Brand
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.brand" plaintext readonly></b-form-input>
        </div>
      </div>

      <div class="row">
        <label for="serialNo" class="col-sm-4 form-label">
          Model
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.model" plaintext readonly></b-form-input>
        </div>
      </div>

      <div class="row">
        <label for="serialNo" class="col-sm-4 form-label">
          Status
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.status" plaintext readonly></b-form-input>
        </div>
      </div>

      <div class="row">
        <label for="serialNo" class="col-sm-4 form-label">
          Date of Purchase
        </label>
        <div class="col-sm-8">
          <b-form-input v-model="appliance.purchaseDate" plaintext readonly></b-form-input>
        </div>
      </div>
    </b-card-text>
    <div class="float-right">
      <b-button>
        <b-icon-pencil-square/>
          Edit
        </b-button>
        <b-button class="ml-2" variant="danger">
          Remove
        </b-button>
    </div>
      </b-card>
</template>

<script>
  export default {
    name: 'appliance_card',
    props: {
      appliance: { type: Object }
    },
  }
</script>
