import SolanaWallets from 'solana-wallets-vue';

// You can either import the default styles or create your own.
import 'src/css/wallet_connect.css';

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { boot } from 'quasar/wrappers';
import VueApexCharts from 'vue3-apexcharts';

export default boot(({ app }) => {
  // something to do
  const walletOptions = {
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    autoConnect: true,
  };

  app.use(SolanaWallets, walletOptions);
  app.use(VueApexCharts);

  console.log('[booted] Wallet');
});
