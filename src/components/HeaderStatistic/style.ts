import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  height: 180px;
  padding-top: 50px;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  align-items: center;
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
  margin-bottom: 30px;
`;

export const GoButton = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-start;
  margin-left: 10px;
`;

export const GoIcon = styled(ArrowLeft).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
  
}))`  
`