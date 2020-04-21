<template>
  <div>
    <v-card v-if="!created">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>

      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
              v-model="musicianprofile.name"
              label="name"
            ></v-text-field>
            <v-text-field
              v-model="musicianprofile.stagename"
              label="stage name"
            ></v-text-field>
            <v-text-field
              v-model="musicianprofile.location"
              label="location"
            ></v-text-field>
            <v-text-field
              v-model="musicianprofile.phonenumber"
              label="phone number"
            ></v-text-field>
            <v-text-field
              v-model="musicianprofile.age"
              label="age"
            ></v-text-field>
            <v-text-field
              v-model="musicianprofile.experience"
              label="years of experience"
            ></v-text-field>
            <span class="caption grey--text text--darken-1">Personal info</span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-slide-group
            v-model="musicianprofile.instruments"
            class="pa-4"
            multiple
            show-arrows
          >
            <v-slide-item
              v-for="item in allinstruments"
              :key="item"
              v-slot:default="{ active, toggle }"
              :value="item"
            >
              <v-avatar class size="80" tile>
                <v-img :src="item.src" contain @click="toggle">
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="black"
                        size="20"
                        v-text="'mdi-close-circle-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-img>
              </v-avatar>
            </v-slide-item>
          </v-slide-group>
        </v-window-item>

        <v-window-item :value="3">
          <v-container fluid>
            <v-combobox
              v-model="musicianprofile.genres"
              :items="allgenres"
              item-text="name"
              item-value="id"
              :search-input.sync="search"
              hide-selected
              label="Add some tags"
              multiple
              persistent-hint
              small-chips
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      <strong>{{ search }}</strong
                      >". Press <kbd>enter</kbd> to create a new one
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-combobox>
          </v-container>
        </v-window-item>

        <v-window-item :value="4">
          <v-card max-width="344" class="mx-auto">
            <v-card-text
              >Here you can add a picture of your gear and describe it with
              text.</v-card-text
            >
            <v-textarea
              v-model="musicianprofile.gear"
              label="Gear description"
            ></v-textarea>
          </v-card>
        </v-window-item>

        <v-window-item :value="5">
          <div class="subtitle-1">All done!</div>
          <div class="pa-4 text-center">
            <span class="caption grey--text">Hit the button!</span>
          </div>
        </v-window-item>
      </v-window>
      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 1" text @click="step--">Back</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="step < 5" color="primary" depressed @click="step++"
          >Next</v-btn
        >
        <v-btn
          v-if="step === 5"
          color="primary"
          depressed
          @click="createProfile"
          >Finish</v-btn
        >
      </v-card-actions>
    </v-card>

    <v-container v-if="created">
      <v-row class="fill-height" align-content="center" justify="center">
        <v-col class="subtitle-1 text-center" cols="12">
          Creating your profile
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="deep-purple accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Axios from 'axios'
export default {
  data: () => ({
    search: null,
    step: 1,
    created: false,

    musicianprofile: {
      name: '',
      stagename: '',
      location: '',
      phonenumber: '',
      age: '',
      experience: '',
      instruments: [],
      genres: [],
      gear: []
    }
  }),
  computed: {
    ...mapState('data', ['allgenres']),
    ...mapState('data', ['allinstruments']),
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Personal info'
        case 2:
          return 'Instrument'
        case 3:
          return 'Genre'
        case 4:
          return 'Gear setup'
        default:
          return 'Last check'
      }
    }
  },
  created() {
    this.$store.dispatch('data/fetchGenres', null, { root: true }),
      this.$store.dispatch('data/fetchInstruments', null, { root: true })
  },
  beforeDestroy() {
    this.created = false
  },
  methods: {
    createProfile() {
      this.created = true
      // Axios.put('http://localhost:8081/musicianprofile', this.musicianprofile)
      this.$store.dispatch('userprofile/setHardcodedUser', this.musicianprofile)

      setTimeout(() => {
        this.$router.push({ name: 'Profile' })
      }, 3000)
    }
  }
}
</script>

<style lang="scss"></style>
