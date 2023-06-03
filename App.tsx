import { ThemeProvider } from 'styled-components';
import { Home } from '@screens/Home';
import theme from './src/theme'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { ActivityIndicator, SafeAreaView } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        {
          fontsLoaded ? <Home /> : <ActivityIndicator style={{ flex: 1, alignItems: 'center' }} />
        }
      </ThemeProvider>
    </SafeAreaView>

  );
}

