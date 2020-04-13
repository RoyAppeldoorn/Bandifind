<template>
  <div>
    <BandCard v-for="item in items" :band="item" :key="item.index" />
  </div>
</template>

<script>
// @ is an alias to /src
import BandCard from "@/components/band/BandCard.vue";

export default {
  data() {
    return {
      items: [
        {
          image_src:
            "https://images-mds.staticskynet.be/News/original/1865445_STEL1223_636652749088232298.jpg",
          title: "Dikke",
          artist: "Foster the People",
          snippet_url: "audio.mp3"
        },
        {
          image_src:
            "https://images-mds.staticskynet.be/News/original/1865445_STEL1158_636652749088232298.jpg",
          title: "Vette",
          artist: "Foster the People",
          snippet_url: "audio2.mp3"
        },
        {
          image_src:
            "https://images-mds.staticskynet.be/News/original/1865445_STEL1267_636652749088232298.jpg",
          title: "Zeug",
          artist: "Foster the People",
          snippet_url: "audio2.mp3"
        }
      ]
    };
  },
  components: {
    BandCard
  }
};
</script>
