<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field label="name" v-model="userprofile.name"></v-text-field>
          <v-text-field label="stage name" v-model="userprofile.stagename"></v-text-field>
          <v-text-field label="location" v-model="userprofile.location"></v-text-field>
          <v-text-field label="phone number" v-model="userprofile.phonenumber"></v-text-field>
          <v-text-field label="age" v-model="userprofile.age"></v-text-field>
          <v-text-field label="years of expierence" v-model="userprofile.expierence"></v-text-field>
          <span class="caption grey--text text--darken-1">Personal info</span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-slide-group v-model="userprofile.selectedinstruments" class="pa-4" multiple show-arrows>
          <v-slide-item
            v-for="item in instrumentenum"
            :key="item.id"
            v-bind:value="item.desc"
            v-slot:default="{ active, toggle }"
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
            v-model="userprofile.selectedgenres"
            :items="items"
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
                    <strong>{{ search }}</strong>". Press
                    <kbd>enter</kbd> to create a new one
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-combobox>
        </v-container>
      </v-window-item>

      <v-window-item :value="4">
        <v-card max-width="344" class="mx-auto">
          <v-card-text>Here you can add a picture of your gear and describe it with text.</v-card-text>
          <v-textarea label="Gear description" v-model="userprofile.gear.desc"></v-textarea>
        </v-card>
      </v-window-item>

      <v-window-item :value="5">
        {{ userprofile }}
        {{ userprofile.gear }}
        {{ userprofile.selectedgenres }}
        {{ userprofile.selectedinstruments }}
        <div class="pa-4 text-center">
          <span class="caption grey--text">Your profile has been created!</span>
        </div>
      </v-window-item>
    </v-window>
    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" text @click="step--">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="step === 5" color="primary" depressed @click="step++">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: ["Groove", "Power", "Heavy", "Black"],
    search: null,
    step: 1,
    instrumentenum: [
      {
        id: 0,
        src:
          "https://www.muziekhandeljoosten.nl/3134-medium_default/esteve-1-cd-klassieke-gitaar.jpg",
        desc: "acoustic guitar"
      },
      {
        id: 1,
        src: "https://images.static-thomann.de/pics/prod/406708.jpg",
        desc: "electric guitar"
      },
      {
        id: 2,
        src:
          "https://www.kirstein.de/out/pictures//master/product/1/6ce046a18784ee30d300535474013e91_1.jpg",
        desc: "drums"
      },
      {
        id: 3,
        src:
          "https://www.muzikekipman.com/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/4/4/44379d7d3c606e7086ce186ebf30589b.jpg",
        desc: "bass"
      },
      {
        id: 4,
        src:
          "https://thumbs.static-thomann.de/thumb/thumb80x80/pics/bdb/163767/14567383_800.jpg",
        desc: "vocalist"
      }
    ],

    userprofile: {
      name: "",
      stagename: "",
      location: "",
      phonenumber: "",
      age: "",
      expierence: "",

      selectedinstruments: [],
      selectedgenres: [],
      gear: { desc: "" }
    }
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Personal info";
        case 2:
          return "Instrument";
        case 3:
          return "Genre";
        case 4:
          return "Gear setup";
        default:
          return "Account created";
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss"></style>
