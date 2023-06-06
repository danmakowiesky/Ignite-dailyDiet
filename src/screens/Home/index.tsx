import { PorcenBoxDiet } from "@components/PorcentBoxDiet";
import { Container, TextRefeicao } from "./style";
import { Header } from "@components/Header";
import { Button } from "@components/ButtonIcon";

export function Home() {
  return (
    <Container>
      <Header />
      <PorcenBoxDiet />
      <TextRefeicao>Refeições</TextRefeicao>
      <Button title='Cadastrar' />
    </Container>
  )
}