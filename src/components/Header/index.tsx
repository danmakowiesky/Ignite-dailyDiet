import { Container, Logo, User } from "./style";
import { ArrowLeft } from "phosphor-react-native"
import logoImg from '@assets/Logo.png'
import userImg from '@assets/user.png';
import theme from "@theme/index";

type HeaderProps = {
  showBackButton: boolean;
}


export function Header() {
  return (
    <>
      <Container>
        <Logo source={logoImg} />
        <User source={userImg} />
      </Container>
    </>

  )
}