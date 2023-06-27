import { TextInputProps } from 'react-native';
import { Container, Header, Title } from './style';

type Props = TextInputProps & {
  title: string;
}

export function Input({ title, ...rest }: Props) {
  return (
    <Container>
      <Header>
        {title}
      </Header>
      <Title {...rest} />
    </Container>
  )
}

