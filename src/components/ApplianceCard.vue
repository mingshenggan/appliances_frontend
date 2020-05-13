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
        <b-button class="ml-2" variant="danger" @click="delete_appliance(appliance.id)" :disabled="destroying">
          Remove
        </b-button>
    </div>
      </b-card>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'appliance_card',
    data () {
      return {
        destroying: false,
      }
    },
    props: {
      appliance: { type: Object },
      index: { type: Number }
    },
    methods: {
      delete_appliance (applianceId) {
        this.destroying = true
        if(confirm("Do you really want to delete this appliance?")) {
          axios
            .delete(`https://appliances-spring.herokuapp.com/api/v1/appliances/${applianceId}`)
            .then(() => {
              this.$emit('appliance_deleted', this.index)
            }).catch((error) => {
              alert(error)
              this.destroying = false
            })
        } else {
          this.destroying = false
        }
      },
    },
  }
</script>
