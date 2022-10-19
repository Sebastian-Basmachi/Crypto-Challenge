import React from 'react';
import {Crypto} from '../interfaces';
import {
  TextList,
  Container,
  CryptoLogo,
  Line,
  Arrow,
  TextPercent,
} from './styles';
import ArrowUp from '../../images/icons/ArrowUp.png';
import ArrowDown from '../../images/icons/ArrowDown.png';

const List = ({cryptos}: {cryptos: Crypto[]}) => {
  return (
    <>
      {cryptos.map((crypto: Crypto) => {
        return (
          <>
            <Container container onlyPadding key={crypto.name}>
              <Container container paddingLeftPercent>
                <CryptoLogo source={crypto.img} />
                <Container paddingLeft>
                  <TextList bold={'bold'}> {crypto.name} </TextList>
                  <TextList grey left size={'14px'}>
                    {crypto.symbol}
                  </TextList>
                </Container>
              </Container>
              <Container center>
                <Container>
                  <TextList bold={'bold'}>
                    $
                    {(crypto.price <= 1 && crypto.price.toFixed(6)) ||
                      crypto.price.toFixed(2)}
                  </TextList>
                  <Container price>
                    <Arrow source={crypto.percent > 0 ? ArrowUp : ArrowDown} />
                    <TextPercent positivePercent={crypto.percent > 0}>
                      {Math.abs(crypto.percent)}%
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
      })}
    </>
  );
};

export default List;
