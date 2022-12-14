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

const List = ({item}: {item: Crypto}) => (
  <>
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
  </>
);

export default List;
