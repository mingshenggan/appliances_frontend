<template>
  <b-col
    :data-id="appliance.id"
    tag="article"
    md="6"
    class="pr-0"
    >
    <b-card
      :title="appliance.id"
      class="border">
      <b-card-text>
        {{ appliance.serialNo }}
        <br>
        {{ appliance.brand }}
        <br>
        {{ appliance.model }}
        <br>
        {{ appliance.status }}
        <br>
        {{ appliance.purchaseDate }}
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
  </b-col>
</template>

<script>
  export default {
    name: 'appliance_card',
    props: {
      appliance: { type: Object }
    },
  }
</script>
