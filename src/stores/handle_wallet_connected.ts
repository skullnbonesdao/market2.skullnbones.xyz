import { Notify } from 'quasar';
import { useWallet } from 'solana-wallets-vue';

export function handle_wallet_connected() {
  if (useWallet().publicKey.value) {
    Notify.create({
      color: 'yellow',
      message: 'Wallet not connected!',
    });
    return true;
  }
  return false;
}
