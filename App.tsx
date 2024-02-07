import { FC } from 'react';
import { useAppState } from './src/hooks/useAppState';
import { ImageBackground, StyleSheet } from 'react-native';

import hiddenBackground from './src/screens/home/img/hidden-background.png';
import { Navigation } from './src/navigation/Navigation';

const App: FC = () => {
  const app = useAppState();

  return (
    <>
      {app === 'inactive' ? (
        <ImageBackground source={hiddenBackground} style={styles.wrap} />
      ) : (
        <Navigation />
      )}
    </>

    // <>
    //   <ImageBackground source={hiddenBackground} style={styles.wrap} />

    //   {app !== 'inactive' && <Navigation />}
    // </>
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
