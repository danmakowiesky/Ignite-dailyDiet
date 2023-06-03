import { PorcenBoxDiet } from "@components/PorcentBoxDiet";
import { Container } from "./style";
import { Header } from "@components/Header";

export function Home() {
  return (
    <Container>
      <Header />
      <PorcenBoxDiet></PorcenBoxDiet>
    </Container>
  )
}