<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Instruments</v-list-item-title>
        <v-list-item-subtitle
          v-for="instrument in profile.instruments"
          :key="instrument.id"
          >{{ instrument.name }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Gear</v-list-item-title>
        <v-list-item-subtitle>{{ profile.gear }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
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
