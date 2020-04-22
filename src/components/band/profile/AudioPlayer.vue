<template>
  <v-card>
    <div v-for="video in item.videos" :key="video.id">
      <iframe
        :src="video.src"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
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

<style lang="scss">
iframe {
  width: 90%;
  margin: 5%;
}
</style>
