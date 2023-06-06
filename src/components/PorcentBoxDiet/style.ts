import styled from "styled-components/native";
import {ArrowUpRight} from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;
  height: 102px;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
  padding-top: 5px;
  padding-bottom: 20px;
`

export const Porcent = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
`

export const DietInfo = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
`

export const GoButton = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-end;
  margin-right: 10px;
`;

export const GoIcon = styled(ArrowUpRight).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
  
}))`  
`;