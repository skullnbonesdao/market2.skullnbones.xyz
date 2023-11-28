<script setup lang="ts">
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { ref } from 'vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import PairIcon from 'components/elements/PairIcon.vue';
import MarketPiriceElement from 'components/market/MarketPiriceElement.vue';
import { CURRENCIES } from 'stores/const';

const selected = ref(null);
const options = ref(useGlobalStaratlasAPIStore().nfts);

function filterFn(val, update) {
  if (val === '') {
    update(() => {
      options.value = useGlobalStaratlasAPIStore().nfts;
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    options.value = useGlobalStaratlasAPIStore().nfts.filter((v) =>
      v.name.toLowerCase().includes(needle)
    );
  });
}
</script>

<template>
  <q-card class="row items-center q-px-sm" flat square>
    <q-select
      class="col text-h6"
      borderless
      use-input
      input-debounce="0"
      @filter="filterFn"
      v-model="useGlobalUserStore().selected_symbol"
      :options="options"
      :display-value="`${
        useGlobalUserStore().selected_symbol
          ? useGlobalUserStore().selected_symbol
          : '*none*'
      }`"
    >
      <template v-slot:prepend>
        <PairIcon
          :asset_image_url="
            useGlobalStaratlasAPIStore().nfts.find(
              (n) => n.symbol == useGlobalUserStore().selected_symbol
            )?.img_path
          "
          :currency="
            CURRENCIES.find(
              (c) =>
                c.mint ==
                useGlobalStaratlasAPIStore().nfts.find(
                  (n) => n.symbol == useGlobalUserStore().selected_symbol
                )?.mint_pair
            )
          "
        />
      </template>

      <template v-slot:append>
        <q-icon name="fa-solid fa-magnifying-glass" />
      </template>

      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section avatar
            ><PairIcon
              :asset_image_url="scope.opt.img_path"
              :currency="scope.opt.currency"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ scope.opt.name }}</q-item-label>
            <q-item-label caption>{{ scope.opt.symbol }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>

    <q-space />
    <q-separator class="q-ma-md" vertical />
    <MarketPiriceElement class="q-card" />
    <q-separator class="q-ma-md" vertical />
    <q-btn
      color="secondary"
      flat
      icon="fa-solid fa-repeat"
      @click="useGlobalUserStore().switch_currency()"
    />

    <q-separator />
  </q-card>
</template>

<style scoped></style>
