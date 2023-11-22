import { PublicKey } from '@solana/web3.js';

export interface I_Currency {
  name: string;
  symbol: string;
  mint: string;
  type: E_Currency;
  img_path: string;
}
export enum E_Currency {
  ATLAS,
  USDC,
}

export const CURRENCIES = [
  {
    name: 'USDC',
    symbol: 'USDC',
    type: E_Currency.USDC,
    mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    img_path: 'currencies/USDC.webp',
  },
  {
    name: 'ATLAS',
    symbol: 'ATLAS',
    type: E_Currency.ATLAS,
    mint: 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx',
    img_path: 'currencies/ATLAS.webp',
  },
] as I_Currency[];
