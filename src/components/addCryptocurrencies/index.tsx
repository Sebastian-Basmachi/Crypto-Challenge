import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Alert, TouchableOpacity} from 'react-native';
import {Crypto} from '../interfaces';
import {Button, Container, Input, Text, TextButton} from './styles';
import {
  getCryptocurrenciesOfUser,
  getInfo,
  postCryptocurrencyOfUser,
} from '../../app/actions/index';

const AddCryptocurrencies = ({navigation}: {navigation: object}) => {
  const dispatch = useDispatch();
  const info: Crypto[] = useSelector(state => state.allCryptos);
  const cryptocurrenciesOfUser: string[] = useSelector(
    state => state.cryptocurrenciesOfUser,
  );
  const [inputText, setInputText] = useState('');
  const backToList = '< Back to list';

  useEffect(() => {
    dispatch(getInfo());
    dispatch(getCryptocurrenciesOfUser());
  }, [dispatch]);

  const addCryptocurrency = () => {
    const cryptoExits: Crypto[] =
      info &&
      info.filter(
        crypto =>
          crypto.name.toUpperCase() === inputText.toUpperCase() ||
          crypto.symbol === inputText.toUpperCase(),
      );
    if (cryptoExits.length > 0 && cryptoExits !== undefined) {
      const addCryptoPreviusly =
        cryptocurrenciesOfUser &&
        cryptocurrenciesOfUser.filter(
          cryptoSymbol => cryptoSymbol === cryptoExits[0].symbol,
        );
      if (addCryptoPreviusly.length === 0) {
        const addCrypto = cryptocurrenciesOfUser.concat(cryptoExits[0].symbol);
        dispatch(postCryptocurrencyOfUser(JSON.stringify(addCrypto)));
        setInputText('');
        backToInitialScreen();
      } else {
        Alert.alert(
          'Exists',
          `${cryptoExits[0].name} already exists in your list of cryptocurrencies, try to another one!`,
        );
      }
    } else {
      Alert.alert(
        'Not found',
        `We don't support the ${inputText} cryptocurrency or ${inputText} not exist, try to another one!`,
      );
    }
  };

  const inputOnChange = text => {
    const p = /^[a-zA-Z0-9_]*$/.test(text);
    if (p) {
      setInputText(text);
    }
  };

  const backToInitialScreen = (): void => {
    navigation.goBack();
  };

  return (
    <>
      <TouchableOpacity onPress={() => backToInitialScreen()}>
        <Text backToList>{backToList}</Text>
      </TouchableOpacity>
      <Container center>
        <Text labelInput>Add a Cryptocurrency</Text>
        <Input
          changeColor={inputText}
          placeholder="Use a name or tiker symbol..."
          value={inputText}
          onChangeText={(text: string) => inputOnChange(text)}
        />
        <Container button>
          <Button onPress={() => addCryptocurrency()}>
            <TextButton changeColor={inputText}>Add</TextButton>
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default AddCryptocurrencies;
