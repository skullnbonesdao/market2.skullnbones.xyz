export interface I_TokenList {
  name: string;
  logoURI: string;
  keywords: string[];
  tags: I_Tags;
  timestamp: Date;
  tokens: I_Token[];
}

export interface I_Tags {
  'lp-token': I_LpToken;
}

export interface I_LpToken {
  name: string;
  description: string;
}

export interface I_Token {
  chainId: number;
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  logoURI: null | string;
  tags: string[];
  verified: boolean;
  holders: number | null;
  extensions?: I_Extensions;
}

export interface I_Extensions {
  coingeckoId: string;
}
