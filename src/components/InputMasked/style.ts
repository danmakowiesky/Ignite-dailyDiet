import styled, { css } from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
    margin-top: 20px;
`

export const Header = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `};
`

export const Title = styled(TextInputMask)`
    width: 153px;
    height: 48px;
    padding: 8px;
    border-radius: 6px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
        border: 1px solid ${theme.COLORS.GRAY_500};
    `};
`

