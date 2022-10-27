import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Platform, TouchableOpacity, FlatList} from 'react-native';
import {Crypto} from '../interfaces/index';
import List from '../list';
import {Container, Text, TopBar, ProfilePhoto} from './styles';
import Profile from '../../images/icons/ProfilePhotograph.png';
import {getInfo} from '../../app/actions';

const CryptocurrenciesList = () => {
  const dispatch = useDispatch();
  const renderItem = ({item}: {item: Crypto}) => <List item={item} />;
  const infoApi = useSelector(state => state.allCryptos);

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);

  const cryptoSelected = ['BTC', 'ETH', 'XRP'];
  const cryptos: Crypto[] = [];
  for (let i = 0; i < infoApi.length; i++) {
    for (let j = 0; j < cryptoSelected.length; j++) {
      if (infoApi[i].symbol === cryptoSelected[j]) cryptos.push(infoApi[i]);
    }
  }

  return (
    <>
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
        <TouchableOpacity>
          <Text primaryC size="16px">
            + Add a Cryptocurrency
          </Text>
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default CryptocurrenciesList;
