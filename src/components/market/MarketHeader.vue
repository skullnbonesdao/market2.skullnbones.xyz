<script setup lang="ts">
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { ref } from 'vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import PairIcon from 'components/elements/PairIcon.vue';
import MarketPiriceElement from 'components/market/MarketPiriceElement.vue';
import { CURRENCIES, E_Currency } from 'stores/const';
import AsssetIcon from 'components/elements/AsssetIcon.vue';
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';
import { useGlobalStore } from '../../stores/globalStore';

const selected = ref(null);
const options = ref(useGlobalStaratlasAPIStore().raw);

function filterFn(val: any, update: any) {
  if (val === '') {
    update(() => {
      options.value = useGlobalStaratlasAPIStore().raw;
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    options.value = useGlobalStaratlasAPIStore().raw.filter(
      (v) =>
        v.name.toLowerCase().includes(needle) ||
        v.symbol.toLowerCase().includes(needle)
    );
  });
}

function update_symbol(name: string, symbol: string) {
  useGlobalUserStore().selected_symbol = name + symbol;
}
</script>

<template>
  <q-card class="row items-center q-px-sm" flat square>
    <div class="row items-center">
      <PairIcon
        size="lg"
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
      <q-separator vertical class="q-ma-sm" />
      <div>
        <div class="text-h6">
          {{
            useGlobalUserStore().selected_symbol
              ? useGlobalUserStore().selected_symbol
              : '*none*'
          }}
        </div>
        <div class="text-subtitle1">
          {{
            useGlobalUserStore().selected_symbol
              ? useGlobalStaratlasAPIStore().nfts.find(
                  (nft) => nft.symbol == useGlobalUserStore().selected_symbol
                ).name
              : '*none*'
          }}
        </div>
      </div>
    </div>

    <q-select
      square
      dense
      filled
      class="col text-h6 q-ya-xs q-ml-md"
      use-input
      input-debounce="0"
      @filter="filterFn"
      :options="options"
    >
      <template v-slot:append>
        <q-icon name="fa-solid fa-magnifying-glass" />
      </template>

      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section avatar>
            <AsssetIcon
              size="xl"
              :url="
                useGlobalStaratlasAPIStore().nfts.find(
                  (n) => n.mint_asset == scope.opt.mint
                )?.img_path
              "
            />
          </q-item-section>
          <q-item-section>
            <div class="row">
              <div
                class="col"
                @click="
                  update_symbol(
                    scope.opt.symbol,
                    CURRENCIES.find((c) => c.type == E_Currency.USDC)!.symbol
                  )
                "
              >
                <q-item-label>{{ scope.opt.name }}</q-item-label>
                <q-item-label caption>{{ scope.opt.symbol }}</q-item-label>
              </div>
              <div class="q-gutter-x-sm row" style="width: 400px">
                <q-btn
                  @click="
                    update_symbol(
                      scope.opt.symbol,
                      CURRENCIES.find((c) => c.type == E_Currency.USDC)!.symbol
                    )
                  "
                  class="col items-end justify-end"
                  color="secondary"
                >
                  <div class="q-mr-md">{{ scope.opt.symbol }}USDC</div>

                  <CurrencyIcon
                    :currency="
                      CURRENCIES.find((c) => c.type == E_Currency.USDC)
                    "
                  />
                </q-btn>
                <q-btn
                  @click="
                    update_symbol(
                      scope.opt.symbol,
                      CURRENCIES.find((c) => c.type == E_Currency.ATLAS)!.symbol
                    )
                  "
                  class="col items-end justify-end"
                  color="secondary"
                >
                  <div class="q-mr-md">{{ scope.opt.symbol }}ATLAS</div>
                  <CurrencyIcon
                    :currency="
                      CURRENCIES.find((c) => c.type == E_Currency.ATLAS)
                    "
                  />
                </q-btn>
              </div>
            </div>
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
