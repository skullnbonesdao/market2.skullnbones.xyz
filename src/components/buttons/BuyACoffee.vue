<script setup lang="ts">
import { ref } from 'vue';

const show_modal = ref(false);
const selected_currency = ref('ATLAS');
const options = ref(['ATLAS', 'POLIS', 'SOL']);
</script>

<template>
  <q-btn
    flat
    square
    icon="fa-solid fa-mug-hot"
    label="Buy a Coffee"
    @click="show_modal = true"
  >
  </q-btn>
  <q-dialog v-model="show_modal">
    <q-card class="q-pa-sm">
      <q-toolbar>
        <q-avatar>
          <img src="logo.png" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">RogueMarket</span>
          Donation</q-toolbar-title
        >

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section class="text-subtitle1">
        Hey mate! <br />Love the ad-free, tracker-free experience on
        RogueMarket? <br />
        Help us keep it that way! <br />
        Your support ensures everyone can trade freely. ❤️
      </q-card-section>

      <q-card-section>
        <div class="row">
          <q-select
            filled
            class="col"
            square
            v-model="selected_currency"
            :options="options"
            label="Currency"
          />
          <q-input filled square class="col" label="Amount" />
          <q-btn square color="primary" icon="send" />
        </div>
      </q-card-section>

      <q-card-section class="col items-center">
        <div class="text-center text-grey-6">
          rmmWw3yt47PysDGd86G1qgVACFkt6Nd4SoLQ38fejEV
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
