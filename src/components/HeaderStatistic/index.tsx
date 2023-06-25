import { Container, Porcent, DietInfo, GoButton, GoIcon } from "./style";
import { useNavigation } from "@react-navigation/native";

export function HeaderStatistic() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')

  }
  return (
    <Container>
      <GoButton onPress={handleGoBack}>
        <GoIcon />
      </GoButton>
      <Porcent>90,86%</Porcent>
      <DietInfo>das refeições dentro da dieta</DietInfo>
    </Container>
  )
}