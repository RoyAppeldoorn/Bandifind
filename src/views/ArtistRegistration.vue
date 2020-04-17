<template>
  <v-container>
    <v-row>
      <v-col sm="12" class="py-0">
        <RegistrationStepper />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import RegistrationStepper from '@/components/MusicianRegistration/RegistrationStepper.vue'
export default {
  components: {
    RegistrationStepper
  }
}
</script>
