<template>
  <div>
    <div class="main-background">
      <v-img dark :src="require(`@/assets/bg.png`)" height="100vh" />
    </div>

    <v-container class="pa-2">
      <v-row
        align="center"
        justify="center"
        style="position: relative; z-index: 10;"
      >
        <v-col cols="12">
          <h1 class="font-weight-bold text-uppercase">
            Find the musician you are looking for
          </h1>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn class="ma-2 PY-2" tile color="#BB86FC" to="/search" exact
            >START YOUR SEARCH</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
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
  bottom: 0;
}
</style>
