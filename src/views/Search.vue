<template>
  <div>
    <v-row align="center">
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="fetchBandGenres"
          outlined
          dense
          chips
          small-chips
          label="Search for genre"
          multiple
          color="#BB86FC"
        ></v-autocomplete>
      </v-col>
    </v-row>
    {{ values }}

    <BandCard v-for="item in filteredList" :key="item.index" :band="item" />
  </div>
</template>

<script>
// @ is an alias to /src
import BandCard from '@/components/band/BandCard.vue'

let filter = []

export default {
  components: {
    BandCard
  },
  data() {
    return {
      items: [
        {
          image_src:
            'https://images-mds.staticskynet.be/News/original/1865445_STEL1223_636652749088232298.jpg',
          title: 'Metallica',
          genres: ['Rock', 'Metal'],
          snippet_url: 'audio.mp3'
        },
        {
          image_src:
            'https://images-mds.staticskynet.be/News/original/1865445_STEL1158_636652749088232298.jpg',
          title: 'Iron Maiden',
          genres: ['Rock', 'Metal', 'Hardrock'],
          snippet_url: 'audio2.mp3'
        },
        {
          image_src:
            'https://images-mds.staticskynet.be/News/original/1865445_STEL1267_636652749088232298.jpg',
          title: 'Slayer',
          genres: ['Sludgemetal', 'Grindcore'],
          snippet_url: 'audio2.mp3'
        }
      ],
      values: null
    }
  },
  computed: {
    fetchBandGenres() {
      const genreArray = []
      this.items.forEach(band => {
        band.genres.forEach(genre => {
          genreArray.push(genre)
        })
      })
      return genreArray
    },
    filteredList() {
      let results = []

      if (this.values && this.values.length) {
        this.items.forEach(item => {
          item.genres.forEach(genre => {
            if (this.values.includes(genre)) {
              if (!results.includes(item)) {
                results.push(item)
              }
            }
          })
        })
      } else {
        return this.items
      }
      return results
    },
    filteredList2() {
      let results = []

      if (this.values && this.values.length) {
        filter.forEach(item => {
          item.genres.filter(genre => {
            if (!results.includes(item)) {
              if (this.values.includes(genre)) {
                results.push(item)
              } else {
                results.splice(item, 1)
              }
            }
          })
        })
      } else {
        filter = this.items
        return filter
      }

      return results
    }
  }
}
</script>
