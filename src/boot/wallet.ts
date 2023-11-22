import SolanaWallets from 'solana-wallets-vue';

// You can either import the default styles or create your own.
import 'src/css/wallet_connect.css';

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  // something to do
  const walletOptions = {
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    autoConnect: true,
  };

  app.use(SolanaWallets, walletOptions);

  console.log('[booted] Wallet');
});
