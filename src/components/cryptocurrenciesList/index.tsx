import React from 'react';
import {ScrollView, Platform, TouchableOpacity} from 'react-native';
import {Crypto} from '../interfaces';
import List from '../list';
import {Container, Text, TopBar, ProfilePhoto} from './styles';
import Profile from '../../images/icons/ProfilePhotograph.png';

const CryptocurrenciesList = () => {
  const cryptos: Crypto[] = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 19218.36,
      percent: -0.79,
      img: require('../../images/cryptoLogo/BTC.png'),
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1302.547,
      percent: 1.2,
      img: require('../../images/cryptoLogo/ETH.png'),
    },
    {
      name: 'XRP',
      symbol: 'XRP',
      price: 0.489701,
      percent: 0.47,
      img: require('../../images/cryptoLogo/XRP.png'),
    },
  ];

  const AddCrypto = () => {
    // FOR REACT NAVIGATION
  };

  return (
    <>
      <TopBar platform={Platform.OS === 'ios'}>
        <Text bold={'bold'}>CryptoTracker Pro</Text>
        <ProfilePhoto source={Profile} />
      </TopBar>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List cryptos={cryptos} />
        <Container>
          <TouchableOpacity onPress={AddCrypto()}>
            <Text primaryC size={'16px'}>
              + Add a Cryptocurrency
            </Text>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </>
  );
};

export default CryptocurrenciesList;
