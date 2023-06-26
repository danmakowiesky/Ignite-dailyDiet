import { PorcenBoxDiet } from "@components/PorcentBoxDiet";
import { Container, HeaderStyleList, Item, TextRefeicao, Content, HeaderSection } from "./style";
import { Header } from "@components/Header";
import { Button } from "@components/ButtonIcon";
import { SectionList } from "react-native";
import { CardSnack } from "@components/CardSnack";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation()
  function handleRegister() {
    navigation.navigate('register')
  }
  const DATA = [
    {
      title: '12.08.22',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: '11.08.22',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: '11.08.22',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: '11.08.22',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: '11.08.22',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: '11.08.22',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
  ];

  return (
    <Container>
      <Header />
      <PorcenBoxDiet />
      <TextRefeicao>Refeições</TextRefeicao>
      <Button title='Cadastrar' onPress={handleRegister} />
      <Content>
        <SectionList sections={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <CardSnack
              title="titulo"
              hour="20:00"
              status={true}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <HeaderSection>
              <HeaderStyleList>{title}</HeaderStyleList>
            </HeaderSection>

          )} />
      </Content>

    </Container>
  )


}