import { Container, DietInfo, GoButton, GoIcon, Porcent } from "./style"
import { useNavigation } from "@react-navigation/native";


export function PorcenBoxDiet() {
  const navigation = useNavigation()

  function handleGoStatistics() {
    navigation.navigate('statistics')

  }
  return (
    <Container>
      <GoButton onPress={handleGoStatistics}>
        <GoIcon />
      </GoButton>
      <Porcent>90,86%</Porcent>
      <DietInfo>das refições dentro da dieta</DietInfo>
    </Container>
  )
}