import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { ActivityIndicator, SafeAreaView } from 'react-native';

import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoaded ? <Routes /> : <ActivityIndicator style={{ flex: 1, alignItems: 'center' }} />
      }
    </ThemeProvider>

  );
}

