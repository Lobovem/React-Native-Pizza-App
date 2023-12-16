import React, { useState, useEffect, useRef } from 'react';
import { AppState, ImageBackground, StyleSheet, View, Text } from 'react-native';

const AppStateHook = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {appStateVisible === 'active' ? (
        <Text>Current state is: {appStateVisible}</Text>
      ) : (
        <React.Fragment>
          <ImageBackground
            source={require('./pizza-1.jpg')}
            style={styles.backgroundImage}
          ></ImageBackground>
          {console.log('ImageBackground rendered')}
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default AppStateHook;
