<template>
  <div>
    <div v-if="loading">
      <v-container>
        <v-row align="center" justify="center">
          <v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </v-row>
      </v-container>
    </div>
    <div v-if="!loading">
      <v-row align="center">
        <v-col cols="12" class="pb-0">
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

      <BandCard v-for="item in filteredList" :key="item.id" :band="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BandCard from '@/components/band/BandCard.vue'
import { mapActions, mapState } from 'vuex'

let filter = []

export default {
  components: {
    BandCard
  },
  data() {
    return {
      values: null
    }
  },
  computed: {
    ...mapState('bandprofile', ['bands', 'loading']),
    fetchBandGenres() {
      const genreArray = []
      this.bands.forEach(band => {
        band.genres.forEach(genre => {
          genreArray.push(genre.name)
        })
      })
      return genreArray
    },
    filteredList() {
      let results = []

      if (this.values && this.values.length) {
        this.bands.forEach(item => {
          item.genres.forEach(genre => {
            if (this.values.includes(genre.name)) {
              if (!results.includes(item)) {
                results.push(item)
              }
            }
          })
        })
      } else {
        return this.bands
      }
      return results
    }
  }
}
</script>
