import styled from 'styled-components/native';
import theme from '../../utils/theme/theme';

export const Text = styled.Text`
  ${props =>
    props.backToList &&
    `color: ${theme.colors.primary};
    font-size: ${theme.size.medium};
    padding-left: 24px;
    padding-top: 60px;`}
  ${props =>
    props.labelInput &&
    `color: ${theme.colors.dark};
    font-size: ${theme.size.labelInput};
    font-weight: bold;
    padding-bottom: 24px;`}
`;

export const TextButton = styled.Text`
  color: ${theme.colors.primary}
  font-size: ${theme.size.addButton};
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  font-weight: bold;
  ${props =>
    props.changeColor && props.changeColor.length >= 1
      ? `opacity: 1`
      : `opacity: 0.2`}
`;

export const Container = styled.View`
  ${props =>
    props.center &&
    `padding-left: 24px;
    padding-right: 24px;
    top: 25%;`}
  ${props =>
    props.button &&
    `padding-top: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end`}
`;

export const Input = styled.TextInput`
  border: solid;
  border-radius: ${theme.border.small};
  padding-left: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: ${theme.size.medium};
  ${props =>
    props.changeColor && props.changeColor.length >= 1
      ? `border-color: ${theme.colors.addButton}`
      : `border-color: ${theme.colors.grey}`}
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.addButton};
  border-radius: ${theme.border.small};
  width: 155px;
`;
