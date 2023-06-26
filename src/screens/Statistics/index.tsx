import { Container, Content, Title, SequenceInfo, Quantity, SubTitle, Meals, OnDiet, OffDiet } from "./style";
import { HeaderStatistic } from "@components/HeaderStatistic";

export function Statistics() {
  return (
    <Container>
      <HeaderStatistic />
      <Content>
        <Title>Estatísticas gerais</Title>
        <SequenceInfo>
          <Quantity>22</Quantity>
          <SubTitle>Melhor sequencia de pratos dentro da dieta</SubTitle>
        </SequenceInfo>
        <SequenceInfo>
          <Quantity>109</Quantity>
          <SubTitle>Melhor sequencia de pratos dentro da dieta</SubTitle>
        </SequenceInfo>
        <Meals>
          <OnDiet>
            <Quantity>22</Quantity>
            <SubTitle>Refeições dentro da dieta</SubTitle>
          </OnDiet>
          <OffDiet>
            <Quantity>22</Quantity>
            <SubTitle>Refeições fora da dieta</SubTitle>
          </OffDiet>
        </Meals>
      </Content>
    </Container>
  )
}