import { Container, Title, GoButton, GoIcon } from "./style";
import { useNavigation } from "@react-navigation/native";

export function HeaderRegister() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')

  }
  return (
    <Container>
      <GoButton onPress={handleGoBack}>
        <GoIcon />
      </GoButton>
      <Title>Nova Refeição</Title>
    </Container>
  )
}