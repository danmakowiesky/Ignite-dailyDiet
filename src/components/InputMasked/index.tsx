import { TextInputMaskProps } from 'react-native-masked-text'
import { Container, Header, Title } from './style';

type Props = TextInputMaskProps & {
  title: string;
}

const InputMasked = ({ title, ...rest }: Props) => {
  return (
    <Container>
      <Header>
        {title}
      </Header>
      <Title {...rest} />
    </Container>
  )
}

export default InputMasked;