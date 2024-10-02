<script setup lang="ts">
import { ref } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import { Notify } from 'quasar';
import { FEE_WALLET, useGlobalStore } from 'stores/globalStore';
import { CURRENCIES, E_Currency } from 'stores/const';
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';

import { handle_confirmation } from 'stores/handle_confirmation';
import {
  createAssociatedTokenAccountInstruction,
  createTransferCheckedInstruction,
} from '@solana/spl-token';
import { useRPCStore } from 'stores/rpcStore';

const show_modal = ref(false);
const selected_currency = ref('ATLAS');
const options = ref(['ATLAS', 'POLIS', 'SOL']);
const input_amount = ref<number>(0);
const is_loading = ref(false);

async function send_donation() {
  is_loading.value = true;

  if (!useWallet().publicKey.value) {
    Notify.create({
      color: 'yellow',
      textColor: 'black',
      message: 'Wallet not connected!',
    });
    return;
  }

  const tx = new Transaction();

  switch (CURRENCIES.find((c) => c.symbol == selected_currency.value)?.type) {
    case E_Currency.SOL:
      tx.add(
        SystemProgram.transfer({
          fromPubkey: useWallet().publicKey.value!,
          toPubkey: new PublicKey(FEE_WALLET),
          lamports: input_amount.value * LAMPORTS_PER_SOL,
        })
      );
      break;
    default:
      const ata = (
        await useRPCStore().connection.getParsedTokenAccountsByOwner(
          useWallet().publicKey.value!,
          {
            mint: new PublicKey(
              CURRENCIES.find((c) => c.symbol == selected_currency.value)!.mint
            ),
          }
        )
      ).value[0];

      const ata_fee = (
        await useRPCStore().connection.getParsedTokenAccountsByOwner(
          FEE_WALLET,
          {
            mint: new PublicKey(
              CURRENCIES.find((c) => c.symbol == selected_currency.value)!.mint
            ),
          }
        )
      ).value[0];

      console.log(ata);
      console.log(ata_fee);

      tx.add(
        createTransferCheckedInstruction(
          ata.pubkey,
          new PublicKey(ata.account.data.parsed.info.mint.toString()),
          ata_fee.pubkey,
          useWallet().publicKey.value,
          BigInt(
            input_amount.value *
              Math.pow(10, ata.account.data.parsed.info.tokenAmount.decimals)
          ),
          ata.account.data.parsed.info.tokenAmount.decimals
        )
      );
      break;
  }
  try {
    const signature = await useWallet().sendTransaction(
      tx,
      useRPCStore().connection as Connection
    );
    await handle_confirmation(signature);
  } catch (err) {
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
  is_loading.value = false;
}
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
    <q-card flat class="q-pa-sm">
      <q-toolbar>
        <q-avatar size="xl">
          <q-img src="rm_logo.png" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">RogueMarket</span> Donation
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section class="text-subtitle1">
        Hey mate! <br />Love the experience on RogueMarket? <br />
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
          <q-input
            filled
            square
            class="col"
            label="Amount"
            type="number"
            v-model="input_amount"
          />
          <q-btn
            :disable="input_amount <= 0"
            square
            color="primary"
            icon="send"
            @click="send_donation()"
          />
        </div>
      </q-card-section>

      <q-card-section class="col items-center">
        <div class="text-center text-grey-6">
          {{ FEE_WALLET.toString() }}
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
