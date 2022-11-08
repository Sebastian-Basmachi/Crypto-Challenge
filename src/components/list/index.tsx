import React from 'react';
import {Crypto} from '../interfaces';
import {
  TextList,
  Container,
  CryptoLogo,
  Line,
  Arrow,
  TextPercent,
  TextSymbol,
} from './styles';
import ArrowUp from '../../images/icons/ArrowUp.png';
import ArrowDown from '../../images/icons/ArrowDown.png';
import {Alert, TouchableOpacity} from 'react-native';
import {postCryptocurrencyOfUser} from '../../app/actions/index';
import {useDispatch, useSelector} from 'react-redux';

const List = ({item}: {item: Crypto}) => {
  const dispatch = useDispatch();
  const cryptocurrenciesOfUser = useSelector(
    state => state.cryptocurrenciesOfUser,
  );

  const deleteCryptocurrency = () => {
    Alert.alert('Delete', `Do you want to delete ${item.name}?`, [
      {text: 'Cancel'},
      {
        text: 'Confirm',
        onPress: () => {
          const deleteCryptocurrencyOfUser: string[] =
            cryptocurrenciesOfUser.filter(symbol => symbol !== item.symbol);
          dispatch(
            postCryptocurrencyOfUser(
              JSON.stringify(deleteCryptocurrencyOfUser),
            ),
          );
        },
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={deleteCryptocurrency}>
      <Container container>
        <Container containerPaddingLP>
          <CryptoLogo
            source={{uri: `https://messari.io/asset-images/${item.id}/128.png`}}
          />
          <Container paddingLeft>
            <TextList> {item.name} </TextList>
            <TextSymbol>{item.symbol}</TextSymbol>
          </Container>
        </Container>
        <Container center>
          <Container>
            <TextList>${item.price.toFixed(item.price < 1 ? 6 : 2)}</TextList>
            <Container price>
              <Arrow source={item.percent > 0 ? ArrowUp : ArrowDown} />
              <TextPercent positivePercent={item.percent > 0}>
                {Math.abs(item.percent).toFixed(2)}%
              </TextPercent>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container center>
        <Line />
      </Container>
    </TouchableOpacity>
  );
};

export default List;
