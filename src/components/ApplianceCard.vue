<template>
  <b-card
    :data-id="appliance.id"
    class="border">
    <b-card-text>

      <div class="d-flex justify-content-end pb-2">
        <a href="#" class="edit-button" :class="{ active: editable }" @click="toggleEditable">
          <b-icon-pencil class="mr-2" />
        </a>
        <button type="button" class="close" aria-label="Close" @click="deleteAppliance">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-4 form-label">
          S/N
        </label>
        <div class="col-8">
          <b-form-input v-model="appliance.serialNo" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-4 form-label">
          Brand
        </label>
        <div class="col-8">
          <b-form-input v-model="appliance.brand" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-4 form-label">
          Model
        </label>
        <div class="col-8">
          <b-form-input v-model="appliance.model" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-4 form-label">
          Status
        </label>
        <div class="col-8">
          <b-form-input v-model="appliance.status" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>

      <div class="row pb-2">
        <label for="serialNo" class="col-4 form-label">
          Date of Purchase
        </label>
        <div class="col-8">
          <b-form-datepicker v-model="appliance.purchaseDate" :plaintext='!editable' :readonly='!editable' />
        </div>
      </div>
    </b-card-text>
    <template v-slot:footer v-if="editable">
      <b-button @click=submitChanges variation="primary" class="float-right">Submit</b-button>
    </template>
  </b-card>
</template>

<script>
  import ApiService from "@/services/ApiService"

  export default {
    name: 'ApplianceCard',
    data () { return {
      original: null,
      editable: false,
    } },
    props: {
      appliance: { type: Object },
      index: { type: Number }
    },
    created () {
      this.original = Object.assign({}, this.appliance)
      if (this.appliance.id == null)
        this.editable = true
    },
    methods: {
      deleteAppliance() {
        let shouldDelete = confirm("Do you really want to delete this appliance?")
        if (shouldDelete && this.appliance.id == null) {
          this.$emit('applianceDeleted', this.index)
        } else if (shouldDelete) {
          ApiService
            .deleteAppliance(this.appliance.id)
            .then(() => { this.$emit('applianceDeleted', this.index) })
            .catch((error) => { alert(error.response.data.error) })
        }
      },
      toggleEditable(event) {
        event.preventDefault();
        if (!this.editable) {
          this.editable = true
          return
        }

        let shouldDiscard = confirm("...\nDo you want to discard your changes?")
        if (shouldDiscard && this.appliance.id != null) {
          this.appliance = this.original
          this.editable = false
        } else if (shouldDiscard) {
          this.$emit('applianceDeleted', this.index)
        }
      },
      submitChanges() {
        let shouldPersist = confirm("Do you really want to save your changes?")

        if (!shouldPersist)
          return

        if (this.appliance.id == null) {
          ApiService
            .createAppliance(this.appliance)
            .then((response) => {
              this.original = Object.assign({}, response.data)
              this.appliance = response.data
              this.$emit("applianceUpdated", response.data, this.index)
              this.editable = false
            }).catch((error) => {
              alert(error.response.data.error)
            })
        } else {
          ApiService
            .updateAppliance(this.appliance)
            .then((response) => {
              this.original = Object.assign({}, response.data)
              this.appliance = response.data
              this.$emit("applianceUpdated", response.data, this.index)
              this.editable = false
            }).catch((error) => {
              alert(error.response.data.error)
            })
        }
      },
    }
  }
</script>

<style lang="scss">
  .edit-button {
    color: inherit;
    opacity: 0.6;

    &:hover, &.active {
      opacity: 1 !important;
      color: #007bff !important;
    }
  }
</style>
