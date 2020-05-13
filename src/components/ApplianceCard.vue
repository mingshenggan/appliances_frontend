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
    data () { return { original: null } },
    props: {
      appliance: { type: Object },
      editable: { type: Boolean, default: false },
    },
    created () {
      this.original = Object.assign({}, this.appliance)
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
      toggleEditable(event) {
        event.preventDefault();
        if (this.editable) {
          if (confirm("Do you really want to save your changes?")) {
            ApiService
              .updateAppliance(this.appliance)
              .then(() => {
                this.original = Object.assign({}, this.appliance)
                this.editable = false
              }).catch((error) => {
                alert(error)
              })
          } else {
            if (confirm("...\nDo you want to discard your changes?")) {
              this.appliance = this.original
              this.editable = false
            }
          }
        } else {
          this.editable = true
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
