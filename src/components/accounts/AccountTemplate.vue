<script setup lang="ts">
import { ref, watch } from 'vue';
import * as factory from '@staratlas/factory';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { biAward } from '@quasar/extras/bootstrap-icons';
import { useGlobalStore } from 'stores/globalStore';
import * as spl from '@solana/spl-token';
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';

const props = defineProps([
  'count',
  'function_name',
  'publicKey',
  'mint',
  'program',
]);

const data = ref('[empty]');

const SYSTEM_PROGRAM = '11111111111111111111111111111111';

const ATLAS_LOCKER_PROGRAM = 'ATLocKpzDbTokxgvnLew3d7drZkEzLzDpzwgrgWKDbmc';
const ATLAS_LOCKER_PROGRAM_AUTH =
  'ATLkZsBofSKG845dNFpNoUyMciGpeH29BCbMqYFUoxzU';

const POLIS_MINT = 'poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk';
const ATLAS_MINT = 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx';

async function run_querry() {
  switch (props.function_name) {
    case 'getRegisteredStake':
      {
        //J5GhV1WKcEU98c1kZt36ixjaErrrPNWbZhg3JQDg114E
        const [registeredStake] = await factory.getRegisteredStake(
          new PublicKey(ATLAS_LOCKER_PROGRAM),
          new PublicKey(ATLAS_LOCKER_PROGRAM_AUTH),
          new PublicKey(props.mint),
          new PublicKey(POLIS_MINT),
        );
        data.value = registeredStake;
      }
      break;

    case 'getStakingAccount':
      {
        const [registeredStake] = await factory.getRegisteredStake(
          new PublicKey(ATLAS_LOCKER_PROGRAM),
          new PublicKey(ATLAS_LOCKER_PROGRAM_AUTH),
          new PublicKey(props.mint),
          new PublicKey(POLIS_MINT),
        );

        //7AUgG8ghecQYopPqVVnjL4x79VeA93TQRLFcQq4Mqehd
        const [statking_account] = await factory.getStakingAccount(
          new PublicKey(ATLAS_LOCKER_PROGRAM),
          new PublicKey(props.publicKey),
          registeredStake,
        );
        data.value = statking_account;
      }
      break;

    case 'getTokenEscrow':
      {
        const [registeredStake] = await factory.getRegisteredStake(
          new PublicKey(ATLAS_LOCKER_PROGRAM),
          new PublicKey(ATLAS_LOCKER_PROGRAM_AUTH),
          new PublicKey(props.mint),
          new PublicKey(POLIS_MINT),
        );

        const [statking_account] = await factory.getStakingAccount(
          new PublicKey(ATLAS_LOCKER_PROGRAM),
          new PublicKey(props.publicKey),
          registeredStake,
        );

        //FbkSCpg5WoPMyQfRfQZWudwHuuts94RcPGPdaTAwyjy1
        data.value = await getAssociatedTokenAddress(
          new PublicKey(props.mint),
          statking_account,
          true,
        );
      }
      break;

    case 'getAssociatedTokenAddress(mint)':
      {
        data.value = await getAssociatedTokenAddress(
          new PublicKey(props.mint),
          new PublicKey(props.publicKey),
          true,
          TOKEN_PROGRAM_ID,
          ASSOCIATED_PROGRAM_ID,
        );
      }

      break;
    default:
      data.value = 'No function called';
      break;
  }
}

watch(
  () => props.count,
  async () => {
    await run_querry();
  },
);
</script>

<template>
  <div class="text-overline">{{ data }}</div>
</template>

<style scoped lang="sass"></style>
