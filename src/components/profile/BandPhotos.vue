<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      >sdfsfdsfsdf</v-carousel-item
    >
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>

<style lang="scss"></style>
