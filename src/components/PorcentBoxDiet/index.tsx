import { Container, DietInfo, GoButton, GoIcon, Porcent } from "./style"

export function PorcenBoxDiet() {
  return (
    <Container>
      <GoButton>
        <GoIcon />
      </GoButton>
      <Porcent>90,86%</Porcent>
      <DietInfo>das refições dentro da dieta</DietInfo>
    </Container>
  )
}