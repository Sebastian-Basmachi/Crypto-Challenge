import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Platform, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import {Crypto} from '../interfaces/index';
import List from '../list';
import {Container, Text, TopBar, ProfilePhoto} from './styles';
import Profile from '../../images/icons/ProfilePhotograph.png';
import {getCryptocurrenciesOfUser, getInfo} from '../../app/actions';

const CryptocurrenciesList = ({navigation}: {navigation: object}) => {
  const dispatch = useDispatch();
  const renderItem = ({item}: {item: Crypto}) => <List item={item} />;
  const info: Crypto[] = useSelector(state => state.allCryptos);
  const cryptocurrenciesOfUser: string[] = useSelector(
    state => state.cryptocurrenciesOfUser,
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(getInfo());
      dispatch(getCryptocurrenciesOfUser());
    }, 2000);
  });

  const cryptos: Crypto[] = [];
  if (info && cryptocurrenciesOfUser) {
    for (let i = 0; i < info.length; i++) {
      for (let j = 0; j < cryptocurrenciesOfUser.length; j++) {
        if (info[i].symbol === cryptocurrenciesOfUser[j]) cryptos.push(info[i]);
      }
    }
  }

  const addCryptocurrenciesScreen = () => {
    navigation.navigate('AddCryptocurrenciesScreen');
  };

  return (
    <SafeAreaView>
      <TopBar platform={Platform.OS === 'ios'}>
        <Text weight="bold">CryptoTracker Pro</Text>
        <ProfilePhoto source={Profile} />
      </TopBar>
      <FlatList
        data={cryptos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Container>
        <TouchableOpacity onPress={() => addCryptocurrenciesScreen()}>
          <Text primaryC size="16px">
            + Add a Cryptocurrency
          </Text>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
};

export default CryptocurrenciesList;
