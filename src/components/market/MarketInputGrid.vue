<script setup lang="ts">
import { ref } from 'vue';
import { GmClientService, OrderSide } from '@staratlas/factory';
import { useWallet } from 'solana-wallets-vue';
import { useGlobalStore } from 'stores/globalStore';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { GM_PROGRAM_ID } from 'stores/globalFactoryStore';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { handle_confirmation } from 'stores/handle_confirmation';
import { Notify } from 'quasar';
import { handle_wallet_connected } from 'stores/handle_wallet_connected';
import MarketInputGridTable from 'components/market/MarketInputGridTable.vue';
import { computed } from 'vue';

const tab1 = ref('buy');

const input_price = ref(0);
const input_amount = ref(0);

const input_best_price = ref(0);
const input_change_percent = ref(0);
const input_size_of_bid = ref(0);
const input_number_of_bids = ref(0);

function calc_price(i: number): number {
  return (
    Number(input_best_price.value) +
    input_best_price.value * (input_change_percent.value / 100) * i
  );
}

interface GridOrder {
  side: OrderSide;
  price: number;
  size: number;
}

const orders = computed(() => {
  let data: GridOrder[] = [];
  for (let i = 0; i < input_number_of_bids.value; i++) {
    data.push({
      side: 'buy',
      price: calc_price(i),
      size: input_size_of_bid.value,
    } as GridOrder);
  }

  return data;
});

async function create_grid_order(side: OrderSide) {
  if (!useWallet().publicKey.value) {
    Notify.create({
      color: 'yellow',
      textColor: 'black',
      message: 'Wallet not connected!',
    });
    return;
  }

  let gmClient = new GmClientService();

  const transaction = new Transaction();

  for (const order of orders.value) {
    const price = await gmClient.getBnPriceForCurrency(
      useGlobalStore().connection as Connection,
      order.price,
      new PublicKey(useGlobalUserStore().selected_nft.mint_pair),
      GM_PROGRAM_ID
    );

    const tx = await gmClient.getInitializeOrderTransaction(
      useGlobalStore().connection as Connection,
      useWallet().publicKey.value!,
      new PublicKey(useGlobalUserStore().selected_nft.mint_asset),
      new PublicKey(useGlobalUserStore().selected_nft.mint_pair),
      order.size,
      price,
      GM_PROGRAM_ID,
      side
    );
    transaction.add(tx.transaction);
  }

  try {
    const signature = await useWallet().sendTransaction(
      transaction,
      useGlobalStore().connection as Connection
    );
    await handle_confirmation(signature);
  } catch (err) {
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
}

function cancelInputs() {
  input_best_price.value = 0;
  input_change_percent.value = 0;
  input_size_of_bid.value = 0;
  input_number_of_bids.value = 0;
}
</script>

<template>
  <q-card flat>
    <div class="q-pt-xs">
      <div class="text-center text-subtitle1">Grid</div>
      <q-separator />
    </div>

    <q-tabs v-model="tab1" indicator-color="transparent">
      <q-tab :class="tab1 == 'buy' ? 'buy' : ''" name="buy" label="Buy" />
      <q-separator vertical />
      <q-tab :class="tab1 == 'sell' ? 'sell' : ''" name="sell" label="Sell" />
    </q-tabs>

    <q-separator />

    <div class="col q-pa-sm q-gutter-y-xs">
      <div class="row q-gutter-x-xs">
        <q-input
          class="col"
          dense
          square
          filled
          label="Best price"
          v-model="input_best_price"
          type="number"
        />

        <q-input
          class="col"
          dense
          square
          filled
          label="Change percent"
          v-model="input_change_percent"
          type="number"
        />
      </div>

      <div class="row q-gutter-x-xs">
        <q-input
          class="col"
          dense
          square
          filled
          label="Number of bids"
          v-model="input_number_of_bids"
          type="number"
        />

        <q-input
          class="col"
          dense
          square
          filled
          label="Size of bid"
          v-model="input_size_of_bid"
          type="number"
        />
      </div>

      <div class="row q-gutter-x-xs">
        <q-btn
          @click="
            create_grid_order(tab1 == 'buy' ? OrderSide.Buy : OrderSide.Sell)
          "
          square
          class="col"
          :class="tab1 == 'buy' ? 'buy' : 'sell'"
          :label="tab1"
        />

        <q-btn
          @click="cancelInputs()"
          square
          color="primary"
          size="sm"
          class="col-1"
          icon="cancel"
        />
      </div>
    </div>

    <MarketInputGridTable
      v-if="
        input_best_price > 0 &&
        input_change_percent > 0 &&
        input_number_of_bids > 0 &&
        input_size_of_bid > 0
      "
      :orders="orders"
    />
  </q-card>
</template>

<style scoped></style>
