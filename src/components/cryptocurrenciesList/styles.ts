import styled from 'styled-components/native';
import theme from '../theme/theme';

export const TopBar = styled.SafeAreaView`
  padding-top: ${props => (props.plataform ? '60px' : '42px')};
  padding-bottom: 42px;
  padding-right: 24px;
  padding-left: 24px;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-family: Inter;
  font-weight: ${props => props.bold || 'normal'};
  font-size: ${props => props.size || theme.size.large};
  line-height: 28px;
  color: ${theme.colors.white};
  ${props => props.primaryC && `color: ${theme.colors.primary}`}
`;

export const ProfilePhoto = styled.Image`
  width: ${theme.image.width};
  height: ${theme.image.height};
  border-radius: 100px;
`;

export const Container = styled.View`
  margin-top: 48px;
  display: flex;
  align-items: center;
`;
