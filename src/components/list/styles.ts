import styled from 'styled-components/native';
import theme from '../../utils/theme/theme';

export const TextList = styled.Text`
  font-family: Inter;
  font-weight: ${props => props.weight || 'normal'};
  font-size: ${theme.size.medium};
  color: ${theme.colors.dark};
`;

export const TextSymbol = styled.Text`
  font-family: Inter;
  font-weight: bold;
  font-size: ${theme.size.small};
  color: ${theme.colors.grey};
  padding-left: 4px;
`;

export const TextPercent = styled.Text`
  textalign: right;
  color: ${props =>
    props.positivePercent ? theme.colors.bullish : theme.colors.bearish};
  width: auto;
`;

export const ProfilePhoto = styled.Image`
  width: ${theme.image.width};
  height: ${theme.image.height};
`;

export const Container = styled.View`
  ${props => props.paddingLeft && 'padding-left: 8px'}
  ${props =>
    props.container &&
    `  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 7.5%;
  padding: 24px
  `}
  ${props =>
    props.containerPaddingLP &&
    `  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 7.5%;
  padding-left: 3%;
  `}
  ${props =>
    props.price &&
    `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;`}
  ${props =>
    props.center &&
    ` 
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Line = styled.Text`
  background-color: rgb(229, 233, 236);
  height: 1.5px;
  width: 85%;
`;

export const CryptoLogo = styled.Image`
  width: ${theme.image.width};
  height: ${theme.image.height};
`;

export const Arrow = styled.Image`
  width: 13px;
  height: 13px;
`;
