<template>
  <v-card>
    <v-card-text>
      <div class="text--primary">Stagename</div>
      <p class="body-1">
        {{ profile.stagename }}
      </p>
      <div class="text--primary">Age</div>
      <p class="body-1">{{ profile.age }} years old</p>
      <div class="text--primary">Location</div>
      <p class="body-1">{{ profile.location }}</p>
      <div class="text--primary">Years of experience</div>
      <p class="body-1">{{ profile.experience }}</p>
      <div class="text--primary">Genre</div>

      <p v-if="profile.genres" class="mb-0">
        <v-chip
          v-for="genre in profile.genres"
          :key="genre"
          x-small
          class="mr-2 mb-2 mt-2"
          color="#BB86FC"
          outlined
        >
          {{ genre.name }}
        </v-chip>
      </p>
      <p v-else class="mb-0">None</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
