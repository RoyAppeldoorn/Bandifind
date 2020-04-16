<template>
  <v-card>
    <div v-for="(item, index) in items" :key="index">
      <iframe
        :src="item.src"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://www.youtube.com/embed/zfqdCXz8Yww'
        },
        {
          src: 'https://www.youtube.com/embed/zfqdCXz8Yww'
        }
      ]
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
