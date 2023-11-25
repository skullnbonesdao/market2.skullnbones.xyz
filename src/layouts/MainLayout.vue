<script setup lang="ts">
import { computed, ref } from 'vue';
import 'src/css/wallet_connect.css';
import { WalletMultiButton } from 'solana-wallets-vue';
import SwitchThemeButton from 'components/buttons/SwitchThemeButton.vue';
import { useQuasar } from 'quasar';
import TpsElement from 'components/elements/TpsElement.vue';
import BuyACoffee from 'components/buttons/BuyACoffee.vue';
import SettingsButton from 'components/buttons/SettingsButton.vue';

const links = computed(() => {
  let data = [
    { icon: 'fa-solid fa-house', text: 'Home', to: '/' },
    { icon: 'fa-solid fa-arrow-trend-up', text: 'Market', to: '/market' },
    { icon: 'fa-solid fa-compass', text: 'Explorer', to: '/explorer' },
    { icon: 'fa-solid fa-table', text: 'Table', to: '/table' },
    { icon: 'fa-solid fa-wallet', text: 'Wallet', to: '/wallet' },
  ];

  return data;
});

const drawer = ref(true);
const miniState = ref(true);
</script>

<template>
  <q-layout view="lHh Lpr lff" class="">
    <q-header class="row q-pa-xs">
      <div class="row full-width items-center" style="padding-right: 0">
        <!--        <q-btn-->
        <!--          class="q-ml-sm"-->
        <!--          flat-->
        <!--          @click="drawer = !drawer"-->
        <!--          round-->
        <!--          dense-->
        <!--          icon="menu"-->
        <!--        />-->

        <q-toolbar-title class="row items-center">
          <!--          <q-img width="60px" fit="cover" src="rm_logo.png" />-->
          <!--          <q-separator class="q-my-sm" vertical />-->
          <!--          <q-img-->
          <!--            width="75px"-->
          <!--            fit="contain"-->
          <!--            src="sa-powered_by_the_people.png"-->
          <!--          />-->
        </q-toolbar-title>
        <TpsElement />
        <BuyACoffee />
        <!--        <SwitchThemeButton />-->
        <SettingsButton />

        <WalletMultiButton dark />
      </div>
    </q-header>

    <q-drawer
      show-if-above
      v-model="drawer"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      bordered
      :breakpoint="500"
      class="q-gutter-y-md"
    >
      <div class="row items-center justify-center q-gutter-y-xs">
        <q-img width="100px" fit="cover" src="rm_logo.png" />
        <q-img
          class="q-mx-xs"
          width="100px"
          fit="contain"
          src="sa-powered_by_the_people.png"
        />
      </div>
      <q-list padding>
        <q-item
          :to="link.to"
          v-for="link in links"
          :key="link.text"
          clickable
          v-ripple
          show-if-above
        >
          <q-item-section avatar>
            <q-icon size="sm" :name="link.icon"> </q-icon>
          </q-item-section>

          <q-item-section> {{ link.text }} </q-item-section>
        </q-item>
      </q-list>

      <!--      <div class="absolute-top q-pt-sm" style="height: 60px">-->
      <!--        <div class="row bg-transparent">-->
      <!--          <q-avatar size="40px" class="col">-->
      <!--            <img src="logo.png" />-->
      <!--          </q-avatar>-->
      <!--        </div>-->
      <!--      </div>-->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.bg-image {
  background-image: url(public/background.webp);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
