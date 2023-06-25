import { SafeAreaView } from 'react-native'
import styled, { css } from 'styled-components/native'


export const Container = styled(SafeAreaView)`
  height: 100%;
  margin: 10px 30px;
`;

export const Content = styled.View`
  margin-bottom: 10px;
`;

export const TextRefeicao = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  line-height: 20.8px;
  margin-bottom: 10px;
  color: #333;
`;

export const HeaderStyleList = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  margin-top: 20px
`;

export const Item = styled.View`
  border: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 14px;
  margin-top: 8px;
`;

export const HeaderSection = styled.View`
`


