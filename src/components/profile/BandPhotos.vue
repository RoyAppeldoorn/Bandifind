<template>
  <v-card>
    <v-carousel v-model="currentIndex">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        :v-model="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-card-subtitle>{{ currentTitle }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          src:
            "https://images-mds.staticskynet.be/News/original/1865445_STEL1158_636652749088232298.jpg",
          desc: "This is a photo of Johan at Graspop metal meeting"
        },
        {
          src:
            "https://images-mds.staticskynet.be/News/original/1865445_STEL1223_636652749088232298.jpg",
          desc: "This is a photo of Johan and Kungen at Graspop metal meeting"
        },
        {
          src:
            "https://images-mds.staticskynet.be/News/original/1865445_STEL1101_636652749088232298.jpg"
        },
        {
          src:
            "https://images-mds.staticskynet.be/News/original/1865445_STEL1267_636652749088232298.jpg"
        }
      ]
    };
  },
  computed: {
    currentTitle() {
      return this.items[this.currentIndex].desc;
    }
  }
};
</script>

<style lang="scss">
.v-carousel {
  height: 300px !important;
}
</style>
