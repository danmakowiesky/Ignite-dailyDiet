import { View, TouchableOpacityProps } from "react-native";

import { Container, Subtitle, Title, CardHeader, VerticalLine, Status } from "./style";

type Props = TouchableOpacityProps & {
  hour: string;
  title: string;
  status: boolean;
}

export function CardSnack({ hour, title, status, ...rest }: Props) {
  return (
    <Container {...rest}>
      <CardHeader>
        <Subtitle>{hour}</Subtitle>
        <VerticalLine></VerticalLine>
        <Title>{title}</Title>
      </CardHeader>
      <Status type={status ? 'PRIMARY' : 'SECONDARY'} />
    </Container>
  )
}