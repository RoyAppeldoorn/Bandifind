<template>
  <div>
    <div class="main-background">
      <v-parallax dark :src="require(`@/assets/bg.png`)" height="300">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-container>
              <h1 class="font-weight-bold text-uppercase">
                Find the musician you are looking for
              </h1>
            </v-container>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="scss">
.main-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
