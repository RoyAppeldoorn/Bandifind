<template>
  <v-card>
    <v-carousel v-model="currentIndex">
      <v-carousel-item
        v-for="image in item.photos"
        :key="image.id"
        :src="image.src"
        :v-model="image.id"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-card-subtitle>{{ currentTitle }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    currentTitle() {
      return this.item.photos[this.currentIndex].description
    }
  }
}
</script>

<style lang="scss">
.v-carousel {
  height: 300px !important;
}
</style>
