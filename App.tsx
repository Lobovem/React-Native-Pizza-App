import { FC, useCallback } from 'react';
import { useAppState } from './src/hooks/useAppState';
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

import hiddenBackground from './src/Screens/HomeScreen/img/hidden-background.png';
import { Navigation } from './src/navigation/Navigation';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Login from './src/Screens/LoginScreen/Login';

const App: FC = () => {
  const app = useAppState();

  return (
    <SafeAreaView style={styles.container}>
      <ClerkProvider publishableKey="pk_test_aG9wZWZ1bC1tb2xsdXNrLTI1LmNsZXJrLmFjY291bnRzLmRldiQ">
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </ClerkProvider>
    </SafeAreaView>
  );
  //   <>
  //     <ImageBackground source={hiddenBackground} style={styles.wrap} />

  //     {app !== 'inactive' && <Navigation />}
  //   </>
  // );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
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
