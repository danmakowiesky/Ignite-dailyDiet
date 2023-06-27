import { Container, Content, HeaderButtonsDiet, MiniContainer, } from "./style";
import { HeaderRegister } from "@components/HeaderRegister";
import { Input } from "@components/Input";
import InputMasked from "@components/InputMasked";

export function Register() {
  return (
    <Container>
      <HeaderRegister />
      <Content>
        <Input title={'Nome'} maxLength={40} style={{ height: 48 }} />
        <Input title={'Descrição'} multiline={true} textAlignVertical={'top'} maxLength={220} style={{ height: 120 }} />
        <MiniContainer>
          <InputMasked
            title={'Data'}
            type='datetime'
            options={{ format: 'DD/MM/YYYY' }}
          />
          <InputMasked
            title={'Hora'}
            type='datetime'
            options={{ format: 'HH:mm' }}
          />
        </MiniContainer>
        <HeaderButtonsDiet>
          Está dentro da dieta?
        </HeaderButtonsDiet>


      </Content>
    </Container >
  )
}