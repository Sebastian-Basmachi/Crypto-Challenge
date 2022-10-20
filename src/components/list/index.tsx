import React, {FC} from 'react';
import {Crypto, Props} from '../interfaces';
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

const List: FC<Props> = ({item}: {item: Crypto}) => (
  <>
    <Container container>
      <Container containerPaddingLP>
        <CryptoLogo source={item.img} />
        <Container paddingLeft>
          <TextList> {item.name} </TextList>
          <TextSymbol>{item.symbol}</TextSymbol>
        </Container>
      </Container>
      <Container center>
        <Container>
          <TextList>
            $
            {(item.price <= 1 && item.price.toFixed(6)) ||
              item.price.toFixed(2)}
          </TextList>
          <Container price>
            <Arrow source={item.percent > 0 ? ArrowUp : ArrowDown} />
            <TextPercent positivePercent={item.percent > 0}>
              {Math.abs(item.percent)}%
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
