import { TouchableOpacityProps } from 'react-native'
import { ButtonStyledProps, Container, Title, Icon } from './style'
import { Plus } from 'phosphor-react-native'

type props = TouchableOpacityProps & {
  title: string,
  type?: ButtonStyledProps
}
export function Button({ title, type = 'PRIMARY', ...rest }: props) {
  return (
    <Container typeButton={type} {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}