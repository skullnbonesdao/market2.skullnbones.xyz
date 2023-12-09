<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import 'src/css/wallet_connect.css';
import { WalletMultiButton } from 'solana-wallets-vue';
import TpsElement from 'components/elements/TpsElement.vue';
import BuyACoffee from 'components/buttons/BuyACoffee.vue';
import SettingsButton from 'components/buttons/SettingsButton.vue';
import { version } from 'src/../package.json';
import { useGlobalStore } from 'stores/globalStore';
import { useGlobalUserStore } from 'stores/globalUserStore';

const links = computed(() => {
  let data = [
    { icon: 'fa-solid fa-house', text: 'Home', to: '/' },
    {
      icon: 'fa-solid fa-arrow-trend-up',
      text: 'Market-UI',
      to: '/market/' + useGlobalUserStore().selected_symbol ?? '',
    },
    { icon: 'fa-solid fa-table', text: 'Market-Table', to: '/table' },
    { icon: 'fa-solid fa-wallet', text: 'Wallet', to: '/wallet' },
    { icon: 'fa-solid fa-compass', text: 'Explorer', to: '/explorer' },
    { icon: 'fa-solid fa-circle-info', text: 'About', to: '/about' },
  ];

  return data;
});

const sync_status = ref();
const display_version = ref(version);
const drawer = ref(true);
const miniState = ref(!useGlobalStore().settings.always_show_drawer);

function toggle_drawer() {
  if (!useGlobalStore().settings.always_show_drawer)
    miniState.value = !miniState.value;
}

watch(
  () => useGlobalStore().settings.always_show_drawer,
  () => {
    if (useGlobalStore().settings.always_show_drawer) miniState.value = false;
    else miniState.value = true;
  }
);

onMounted(async () => {
  const block_height = await useGlobalStore().connection.getSlot();
  const cursor = await useGlobalStore().api_client.cursor.getCursor();
  sync_status.value = cursor[0].block_num / block_height;
});
</script>

<template>
  <q-layout view="lHh Lpr lff" class="bg-image-dark">
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

        <q-btn
          flat
          icon="fa-brands fa-discord"
          target="_blank"
          href="https://discord.gg/m6e5UfwCjM"
        />
        <q-btn
          flat
          icon="fa-brands fa-github"
          target="_blank"
          href="https://github.com/skullnbonesdao/market2.skullnbones.xyz"
        />

        <!--        <SwitchThemeButton />-->

        <SettingsButton />

        <WalletMultiButton dark />
      </div>
    </q-header>

    <q-drawer
      show-if-above
      v-model="drawer"
      :mini="miniState"
      @mouseover="toggle_drawer()"
      @mouseout="toggle_drawer()"
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
          active-class="bg-primary"
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

      <div
        class="col absolute-bottom items-center justify-center row q-mb-sm q-gutter-y-sm"
      >
        <div v-if="!miniState" class="text-weight-thin text-body2">
          Driven by
        </div>
        <q-img src="streamingfast.png" />

        <q-linear-progress :value="sync_status" :size="miniState ? '' : '25px'">
          <div v-if="!miniState" class="absolute-full flex flex-center">
            <q-badge :label="(sync_status * 100).toFixed(2) + '%'" />
          </div>
        </q-linear-progress>

        <q-badge class="" :label="display_version" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style></style>
