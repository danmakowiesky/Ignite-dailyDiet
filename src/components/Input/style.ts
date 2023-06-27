import styled, { css } from 'styled-components/native';

const Container = styled.View`
    margin-top: 20px;
`

const Header = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_600};
    `};
`

const Title = styled.TextInput`
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
        border: 1px solid ${theme.COLORS.GRAY_200};
    `};
`

export { Container, Header, Title };