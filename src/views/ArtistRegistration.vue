<template>
  <v-row sm="12" md="12">
    <v-col sm="12" md="4">
      <RegistrationStepper />
    </v-col>
  </v-row>
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
