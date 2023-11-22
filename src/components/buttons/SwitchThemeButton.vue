<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useGlobalStore } from 'stores/globalStore';
</script>

<template>
  <q-btn
    style="height: 48px"
    square
    flat
    v-if="useQuasar().dark.isActive"
    icon="light_mode"
    @click="useQuasar().dark.toggle"
  ></q-btn>
  <q-btn
    style="height: 48px"
    square
    flat
    v-else
    icon="dark_mode"
    @click="useQuasar().dark.toggle"
  ></q-btn>
</template>

<style scoped></style>
