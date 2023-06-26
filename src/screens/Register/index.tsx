import { Text } from "react-native";
import { Container, Content, } from "./style";
import { HeaderRegister } from "@components/HeaderRegister";

export function Register() {
  return (
    <Container>
      <HeaderRegister />
      <Content>
        <Text>hello</Text>

      </Content>
    </Container>
  )
}