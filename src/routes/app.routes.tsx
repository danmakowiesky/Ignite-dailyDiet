import { createNativeStackNavigator } from '@react-navigation/native-stack'


const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '@screens/Home';
import { Register } from '@screens/Register';
import { Statistics } from '@screens/Statistics'

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName='home'
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="statistics"
        component={Statistics}
      />
      <Screen
        name="register"
        component={Register}
      />

    </Navigator>
  );
}