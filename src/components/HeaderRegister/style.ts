import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  height: 140px;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 40px`;

export const Title = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  text-align: center;
`;

export const GoButton = styled.TouchableOpacity`
`;

export const GoIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_700,
}))`
`;

