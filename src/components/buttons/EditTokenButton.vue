<script setup lang="ts">
import { ref } from 'vue';
import { FEE_WALLET, SERVICE_FEE, useGlobalStore } from 'stores/globalStore';
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
  getAssociatedTokenAddress,
  createCloseAccountInstruction,
  TOKEN_PROGRAM_ID,
  createBurnInstruction,
} from '@solana/spl-token';
import * as spl from '@solana/spl-token';
import { useWallet } from 'solana-wallets-vue';
import { Notify } from 'quasar';
import { handle_confirmation } from 'stores/handle_confirmation';

const show_modal = ref(false);

const props = defineProps(['mint', 'decimals', 'amount']);
const input_receiver = ref('');
const input_amount = ref(0);

async function burn_token() {
  const tx = new Transaction();

  const ata = await getAssociatedTokenAddress(
    new PublicKey(props.mint),
    useWallet().publicKey.value
  );

  tx.add(
    createBurnInstruction(
      ata,
      new PublicKey(props.mint),
      useWallet().publicKey.value,
      props.amount * Math.pow(10, props.decimals)
    )
  );

  tx.add(
    createCloseAccountInstruction(
      ata,
      useWallet().publicKey.value,
      useWallet().publicKey.value
    )
  );

  //Fee TX
  tx.add(
    SystemProgram.transfer({
      fromPubkey: useWallet().publicKey.value!,
      toPubkey: new PublicKey(FEE_WALLET),
      lamports: SERVICE_FEE,
    })
  );

  try {
    const signature = await useWallet().sendTransaction(
      tx,
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

async function close_account() {
  const tx = new Transaction();

  const ata = await getAssociatedTokenAddress(
    new PublicKey(props.mint),
    useWallet().publicKey.value
  );

  tx.add(
    createCloseAccountInstruction(
      ata,
      useWallet().publicKey.value,
      useWallet().publicKey.value
    )
  );

  //Fee TX
  tx.add(
    SystemProgram.transfer({
      fromPubkey: useWallet().publicKey.value!,
      toPubkey: new PublicKey(FEE_WALLET),
      lamports: SERVICE_FEE,
    })
  );

  try {
    const signature = await useWallet().sendTransaction(
      tx,
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
</script>

<template>
  <q-btn
    square
    color="primary"
    size="sm"
    icon="edit"
    @click="show_modal = true"
  ></q-btn>

  <q-dialog v-model="show_modal">
    <q-card>
      <q-toolbar class="q-mt-md">
        <q-avatar>
          <q-icon name="edit" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">Close/Burn Account</span>
          <div class="text-overline">{{ mint }}</div>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section class="q-gutter-y-md col justify-around">
        <div class="row q-gutter-x-sm">
          <div class="">Closing Token-Accounts will recover the fee!</div>
        </div>
        <div class="row q-gutter-x-sm">
          <div class="">Amount left:</div>
          <div class="">{{ amount }}</div>
        </div>

        <q-btn
          square
          :disabled="amount == 0"
          class="full-width"
          color="red"
          @click="burn_token()"
        >
          Burn and close Account (+0.00193428 SOL)
        </q-btn>
        <q-btn
          square
          :disabled="amount > 0"
          class="full-width"
          color="orange"
          @click="close_account()"
        >
          Close Account (+0.00193428 SOL)</q-btn
        >
      </q-card-section>

      <div class="q-ma-md text-right text-weight-light">
        fee: {{ SERVICE_FEE / LAMPORTS_PER_SOL }}◎
      </div>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="sass"></style>
