<template>
  <v-container class="d-flex justify-center">
    <v-btn color="primary" @click="toggleTheme">
      Toggle Theme
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
