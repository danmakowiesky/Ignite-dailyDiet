import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'


export const Container = styled(SafeAreaView)`
  height: 100%;
  margin: 10px 30px;
`;

export const TextRefeicao = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  line-height: 20.8px;
  margin-bottom: 10px;
`;

