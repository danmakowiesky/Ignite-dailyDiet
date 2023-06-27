import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  position: relative;
  bottom: 20px;
`;

export const MiniContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
  margin-top: 30px;
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const HeaderButtonsDiet = styled.Text`
    margin: 30px 0 5px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_100};
    `};
`
