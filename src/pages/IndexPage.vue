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
    <q-img class="logo" src="logo.png" fit="contain" height="60vh"> </q-img>
    <div class="absolute-bottom text-center text-h4 q-pa-sm bg-primary">
      <div>Welcome to RogueMarket, we operate even when StarCom is not!</div>
      <div class="text-h6 text-weight-light">by Skull&Bones</div>
    </div>
  </q-page>
</template>

<style scoped>
.bg-image {
  background-image: url('/background.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
