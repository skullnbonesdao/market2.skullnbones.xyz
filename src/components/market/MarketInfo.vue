<script setup lang="ts">
import SolscanLink from 'components/buttons/SolscanLink.vue';
import SolscanButton from 'components/elements/SolscanButton.vue';
import StarAtlasButton from 'components/elements/StarAtlasButton.vue';
import { useGlobalStore } from 'stores/globalStore';
import { useWallet } from 'solana-wallets-vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import MarketPriceChangeElement from 'components/elements/MarketPriceChangeElement.vue';
import { format_address } from '../../stores/format_address';
import { computed, onMounted, ref, watch } from 'vue';
import { PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

const supply = ref();
const holder = ref();

async function fetch_token_supply() {
  supply.value = 0;
  supply.value = (
    await useGlobalStore().connection.getTokenSupply(
      new PublicKey(
        useGlobalStaratlasAPIStore().nfts.find(
          (nft) => nft.symbol == useGlobalUserStore().selected_symbol
        )?.mint_asset ?? ''
      )
    )
  ).value.uiAmount;
}

async function fetch_token_holders() {
  holder.value = 0;
  holder.value = (
    await useGlobalStore().connection.getParsedProgramAccounts(
      TOKEN_PROGRAM_ID,
      {
        filters: [
          {
            dataSize: 165,
          },
          {
            memcmp: {
              offset: 0,
              bytes:
                useGlobalStaratlasAPIStore().nfts.find(
                  (nft) => nft.symbol == useGlobalUserStore().selected_symbol
                )?.mint_asset ?? '',
            },
          },
        ],
      }
    )
  ).filter(
    (account) => account.account.data.parsed.info.tokenAmount.uiAmount > 0
  );
}

onMounted(async () => {
  await fetch_token_supply();
  await fetch_token_holders();
});

watch(
  () => useGlobalUserStore().selected_symbol,
  async () => {
    await fetch_token_supply();
    await fetch_token_holders();
  }
);
</script>

<template>
  <q-card square flat class="q-pa-sm">
    <div class="col">
      <div class="row justify-between">
        <div class="text-weight-light">Name</div>
        <div class="text-body1">
          {{
            useGlobalStaratlasAPIStore().nfts.find(
              (nft) => nft.symbol == useGlobalUserStore().selected_symbol
            ).name
          }}
        </div>
      </div>
      <div class="row justify-between">
        <div class="text-weight-light">Symbol</div>
        <div class="text-body1">
          {{
            useGlobalStaratlasAPIStore().nfts.find(
              (nft) => nft.symbol == useGlobalUserStore().selected_symbol
            ).symbol
          }}
        </div>
      </div>
      <div class="row justify-between">
        <div class="text-weight-light">Address</div>
        <div class="text-body1">
          {{
            format_address(
              useGlobalStaratlasAPIStore().nfts.find(
                (nft) => nft.symbol == useGlobalUserStore().selected_symbol
              ).mint_asset
            )
          }}
        </div>
      </div>
      <div class="row justify-between">
        <div class="text-weight-light">Supply</div>
        <div class="text-body1">
          {{ supply }}
        </div>
      </div>
      <div class="row justify-between">
        <div class="text-weight-light">Holders</div>
        <div class="text-subtitle1">
          {{ holder?.length }}
        </div>
      </div>
    </div>
    <div class="row q-my-xs q-gutter-x-sm justify-end">
      <SolscanButton
        class="col"
        :mint="
          useGlobalStaratlasAPIStore().nfts.find(
            (nft) => nft.symbol == useGlobalUserStore().selected_symbol
          )?.mint_asset
        "
      />
      <StarAtlasButton
        class="col"
        :mint="
          useGlobalStaratlasAPIStore().nfts.find(
            (nft) => nft.symbol == useGlobalUserStore().selected_symbol
          )?.mint_asset
        "
      />
    </div>
    <div class="col">
      <div class="row">
        <MarketPriceChangeElement class="col" timespan="day" />
        <MarketPriceChangeElement class="col" timespan="week" />
      </div>
      <div class="row">
        <MarketPriceChangeElement class="col" timespan="month" />
        <MarketPriceChangeElement class="col" timespan="year" />
      </div>
    </div>
  </q-card>
</template>

<style scoped></style>
