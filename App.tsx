import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { Statistics } from '@screens/Statistics';
import { Home } from '@screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoaded ? <Statistics /> : <ActivityIndicator style={{ flex: 1, alignItems: 'center' }} />
      }
    </ThemeProvider>

  );
}

