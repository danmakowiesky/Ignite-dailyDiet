import { Plus } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

export type ButtonStyledProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  typeButton: ButtonStyledProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({theme, typeButton}) => typeButton === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Plus).attrs<Props>(({ theme }) => ({
  size: 20,
  color: theme.COLORS.WHITE,

}))`
  padding: 0 20px`
;
export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family : ${({theme}) => theme.FONT_FAMILY.BOLD};
`;