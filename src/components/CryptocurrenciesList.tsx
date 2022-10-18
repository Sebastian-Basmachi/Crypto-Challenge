import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Platform,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {Crypto} from './Interfaces';
import {List} from './List';

export const CryptocurrenciesList = () => {
  const cryptos: Crypto[] = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 19218.36,
      percent: -0.79,
      img: require('../images/cryptoLogo/BTC.png'),
      arrow: require('../images/icons/ArrowDown.png'),
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1302.547,
      percent: 1.2,
      img: require('../images/cryptoLogo/ETH.png'),
      arrow: require('../images/icons/ArrowUp.png'),
    },
    {
      name: 'XRP',
      symbol: 'XRP',
      price: 0.489701,
      percent: 0.47,
      img: require('../images/cryptoLogo/XRP.png'),
      arrow: require('../images/icons/ArrowUp.png'),
    },
  ];

  const AddCrypto = () => {
    // FOR REACT NAVIGATION
  };

  return (
    <>
      <SafeAreaView style={styles.sectionBar}>
        <Text style={styles.sectionText}>CryptoTracker Pro</Text>
        <Image
          style={styles.sectionImage}
          source={require('../images/icons/Alberdi.jpg')}
        />
      </SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List cryptos={cryptos} />
        <View style={[styles.sectionContainer, {display: 'flex', alignItems: 'center'}]}>
          <TouchableOpacity onPress={() => {AddCrypto()}} >
            <Text style={[{color: 'blue'}]}>+ Add Cryptocurrency</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    lineHeight: 28,
    color: 'white',
  },
  sectionBar: {
    paddingTop: Platform.OS === 'ios' ? 60 : 42,
    paddingBottom: 42,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: '#385775',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionImage: {
    width: 48,
    height: 48,
    borderRadius: 100 / 2,
  },
});
