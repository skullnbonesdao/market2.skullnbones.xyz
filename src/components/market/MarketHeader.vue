<script setup lang="ts">
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { ref } from 'vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import PairIcon from 'components/elements/PairIcon.vue';
import MarketPiriceElement from 'components/market/MarketPiriceElement.vue';

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
  <q-card class="row items-center q-px-sm" flat>
    <q-select
      class="col text-h6"
      borderless
      use-input
      input-debounce="0"
      @filter="filterFn"
      v-model="useGlobalUserStore().selected_nft"
      :options="options"
      :display-value="`${
        useGlobalUserStore().selected_nft
          ? useGlobalUserStore().selected_nft.name
          : '*none*'
      }`"
    >
      <template v-slot:prepend>
        <PairIcon
          :asset_image_url="useGlobalUserStore().selected_nft.img_path"
          :currency="useGlobalUserStore().selected_nft.currency"
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
    <div>Volume</div>
    <q-separator />
  </q-card>
</template>

<style scoped></style>
