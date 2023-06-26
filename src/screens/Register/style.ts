import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items : center;
  background-color: #FFF;
  border-top-right-radius: 20%;
  border-top-left-radius: 20%;
  margin-top: -13px
`;

export const Title = styled.Text`
  margin-top: 30px;
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const SequenceInfo = styled.View`
  margin: 10px 20px;
  padding: 20px;
  width: 89%;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_200};
  border-radius: 6px;
`;

export const Quantity = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  padding-bottom: 10px;
`;

export const SubTitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  justify-content: center;
`;

export const Meals = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px

`;

export const OnDiet = styled.View`
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  border-radius: 6px;
  width: 170px;
  align-items: center;
  padding: 20px;
`;

export const OffDiet = styled.View`
  background-color: ${({theme}) => theme.COLORS.RED_LIGHT};
  border-radius: 6px;
  width: 170px;
  align-items: center;
  padding: 20px;
`;
