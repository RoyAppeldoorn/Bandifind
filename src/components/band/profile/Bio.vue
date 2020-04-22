<template>
  <v-card>
    <v-img
      :src="item.photos[0].src"
      height="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      contain
    >
      <v-card-title class="white--text headline font-weight-bold">
        {{ item.name }}
      </v-card-title>
    </v-img>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Genres</v-list-item-title>
        <v-list-item-subtitle v-for="genre in item.genres" :key="genre.id">{{
          genre.name
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Country</v-list-item-title>
        <v-list-item-subtitle>
          {{ item.country }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Hometown</v-list-item-title>
        <v-list-item-subtitle>
          {{ item.hometown }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
