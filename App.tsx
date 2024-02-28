import { FC } from 'react';
import { useAppState } from './src/hooks/useAppState';
import { ImageBackground, StyleSheet, Text } from 'react-native';

import hiddenBackground from './src/Screens/HomeScreen/img/hidden-background.png';
import { Navigation } from './src/navigation/Navigation';
import { ClerkProvider } from '@clerk/clerk-expo';

const App: FC = () => {
  const CLERK_PUBLISHABLE_KEY =
    'pk_test_dG91Y2hpbmctYmVkYnVnLTQ0LmNsZXJrLmFjY291bnRzLmRldiQ';
  const app = useAppState();

  return (
    // <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    //   <Text>TEST</Text>
    // </ClerkProvider>

    <>
      <ImageBackground source={hiddenBackground} style={styles.wrap} />

      {app !== 'inactive' && <Navigation />}
    </>
  );
};

const styles = StyleSheet.create({
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
