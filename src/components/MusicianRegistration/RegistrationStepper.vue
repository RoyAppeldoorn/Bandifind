<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field label="Email" value="john@vuetifyjs.com"></v-text-field>
          <span class="caption grey--text text--darken-1">Personal info</span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
          <v-slide-item
            v-for="item in items"
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
        <div class="pa-4 text-center">
          <span>{{ model }}</span>
          <span>{{ ReturnSelectedInstruments.desc }}</span>
          <v-img class="mb-4" contain src="https://cdn.vuetifyjs.com/images/logos/v.svg"></v-img>

          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Genre</span>
        </div>
      </v-window-item>

      <v-window-item :value="4">
        <div class="pa-4 text-center">
          <v-avatar class size="60" tile>
            <v-img class="mb-4" src="https://cdn.vuetifyjs.com/images/logos/v.svg"></v-img>
          </v-avatar>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Gear</span>
        </div>
      </v-window-item>

      <v-window-item :value="5">
        <div class="pa-4 text-center">
          <v-img class="mb-4" contain height="128" src></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
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
    step: 1,
    items: [
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
    model: []
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
    },
    returnSelectedInstruments() {
      var instruments = [];
      if (this.model.length) {
        this.model.forEach(element => {
          instruments.push(
            this.items.filter(function(item) {
              return item.id == element.id;
            })
          );
        });
      }
      return instruments;
    }
  },
  methods: {}
};
</script>

<style lang="scss"></style>
