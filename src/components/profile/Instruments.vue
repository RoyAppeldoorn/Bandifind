<template>
  <v-card>
    <v-card-text>
      <div class="text--primary mb-2">Instruments</div>
      <p
        v-for="instrument in profile.instruments"
        :key="instrument"
        class="body-1"
      >
        {{ instrument.name }}
      </p>
      <div class="text--primary">Gear</div>
      <p class="caption">{{ profile.gear }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
