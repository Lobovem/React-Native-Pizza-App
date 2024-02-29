import { FC, useCallback } from 'react';
import { useAppState } from './src/hooks/useAppState';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useFonts } from 'expo-font';

import hiddenBackground from './src/Screens/HomeScreen/img/hidden-background.png';
import { Navigation } from './src/navigation/Navigation';
import { ThemeProvider } from 'styled-components/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'red', // Установите желаемый цвет фона здесь
  },
};

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    'outfit-regular': require('./src/assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./src/assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./src/assets/fonts/Outfit-Bold.ttf'),
  });

  const app = useAppState();

  if (!fontsLoaded) {
    // Шрифт еще не загружен, можно отобразить заглушку или загрузочный экран
    return null;
  }

  return (
    // <>
    //   <ImageBackground source={hiddenBackground} style={styles.wrap} />

    // {app !== 'inactive' && (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="default" />
      <Navigation />
    </PaperProvider>
    // )}
    // </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    // ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 250,
    bottom: 0,
    opacity: 0.3,
    height: '65%',
    // resizeMode: 'center',
  },
});

export default App;
