<script setup lang="ts">
import { useGlobalUserStore } from '../stores/globalUserStore';

function myTweak(offset: any) {
  // "offset" is a Number (pixels) that refers to the total
  // height of header + footer that occupies on screen,
  // based on the QLayout "view" prop configuration

  // this is actually what the default style-fn does in Quasar
  return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' };
}
</script>

<template>
  <q-page :style-fn="myTweak" class="row bg-image">
    <q-img class="q-ma-sm logo" src="logo.png" fit="contain" height="60vh" />
  </q-page>
</template>

<style scoped>
.bg-image {
  background-image: url(public/background.webp);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
