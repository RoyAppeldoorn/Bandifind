<template>
  <v-card max-width="450" class="mx-auto">
    <v-subheader>Album history</v-subheader>
    <template v-for="(item, index) in items">
      <v-row v-bind:key="index">
        <v-col sm="3">
          <v-img height="100" width="100" :src="item.avatar"></v-img>
        </v-col>
        <v-col sm="9">
          <v-text v-text="item.release"></v-text>
          <br />
          <v-text v-text="item.genre"></v-text>
          <br />
          <v-text v-text="item.label"></v-text>
          <br />
        </v-col>
      </v-row>
    </template>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar:
          "https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/8/6/9/0/9200000035840968.jpg",
        title: "Thoughts of no tomorrow",
        release: "Release year: 2005",
        genre: "Genre: Death metal",
        label: "Label: Gain Music Entertainment",
      },
      {
        avatar:
          "https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/8/6/9/0/9200000035840968.jpg",
        title: "Thoughts of no tomorrow",
        release: "Release year: 2005",
        genre: "Genre: Death metal",
        label: "Label: Gain Music Entertainment",
      },
      {
        avatar:
          "https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/8/6/9/0/9200000035840968.jpg",
        title: "Thoughts of no tomorrow",
        release: "Release year: 2005",
        genre: "Genre: Death metal",
        label: "Label: Gain Music Entertainment",
      },
      {
        avatar:
          "https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/8/6/9/0/9200000035840968.jpg",
        title: "Thoughts of no tomorrow",
        release: "Release year: 2005",
        genre: "Genre: Death metal",
        label: "Label: Gain Music Entertainment",
      },
    ],
  }),
};
</script>

<style lang="scss">
.v-image--content {
  display: block;
}
.v-card {
  padding: 5px;
}
</style>
