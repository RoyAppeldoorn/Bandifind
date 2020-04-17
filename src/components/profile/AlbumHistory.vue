<template>
  <v-card max-width="450" class="mx-auto">
    <v-subheader>Album history</v-subheader>
    <v-card-subtitle class="pt-0">
      <template v-for="(item, index) in items">
        <v-row :key="index">
          <v-col sm="6">
            <v-avatar size="125" tile>
              <v-img :src="item.avatar" />
            </v-avatar>
          </v-col>
          <v-col sm="6">
            <div v-text="item.release"></div>
            <div v-text="item.genre"></div>
            <div v-text="item.label"></div>
          </v-col>
        </v-row>
      </template>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar:
          'https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/8/6/9/0/9200000035840968.jpg',
        title: 'Thoughts of no tomorrow',
        release: 'Release year: 2005',
        genre: 'Genre: Death metal',
        label: 'Label: Gain Music Entertainment'
      },
      {
        avatar:
          'https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/8/6/9/0/9200000035840968.jpg',
        title: 'Thoughts of no tomorrow',
        release: 'Release year: 2005',
        genre: 'Genre: Death metal',
        label: 'Label: Gain Music Entertainment'
      },
      {
        avatar:
          'https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/8/6/9/0/9200000035840968.jpg',
        title: 'Thoughts of no tomorrow',
        release: 'Release year: 2005',
        genre: 'Genre: Death metal',
        label: 'Label: Gain Music Entertainment'
      },
      {
        avatar:
          'https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/8/6/9/0/9200000035840968.jpg',
        title: 'Thoughts of no tomorrow',
        release: 'Release year: 2005',
        genre: 'Genre: Death metal',
        label: 'Label: Gain Music Entertainment'
      }
    ]
  })
}
</script>

<style lang="scss">
.v-image--content {
  display: block;
}
.v-card {
  padding: 5px;
}
</style>
