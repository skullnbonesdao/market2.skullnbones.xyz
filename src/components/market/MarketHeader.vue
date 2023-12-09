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
  <div class="row">
    <q-select
      square
      dense
      standout
      class="col text-h6 bg-primary"
      use-input
      input-debounce="0"
      @filter="filterFn"
      :options="options"
      model-value=""
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

    <q-btn
      square
      color="secondary"
      icon="fa-solid fa-repeat"
      @click="useGlobalUserStore().switch_currency()"
    />

    <q-separator />
  </div>
</template>

<style scoped></style>
