import React from 'react';

export interface Crypto {
  name: string;
  symbol: string;
  price: number;
  percent: number;
  img: string;
}

export interface Props {
  cryptos: Crypto[];
}
