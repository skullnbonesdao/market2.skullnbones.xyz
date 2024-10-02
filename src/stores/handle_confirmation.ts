import { useGlobalStore } from 'stores/globalStore';
import { Notify } from 'quasar';
import { useRPCStore } from 'stores/rpcStore';

export async function handle_confirmation(signature: any) {
  const notif = Notify.create({
    group: false, // required to be updatable
    timeout: 0, // we want to be in control when it gets dismissed
    spinner: true,
    message: 'Confirming tx...',
  });

  const latestBlockHash =
    await useRPCStore().connection.getLatestBlockhash();

  await useRPCStore().connection.confirmTransaction(
    {
      signature: signature,
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    },
    'confirmed',
  );

  notif({
    icon: 'done', // we add an icon
    spinner: false, // we reset the spinner setting so the icon can be displayed
    color: 'green',
    badgePosition: 'bottom-right',
    message: 'Signature confirmed!',
    timeout: 2500, // we will timeout it in 2.5s
  });
  return true;
}
