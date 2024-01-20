import { FC } from 'react';
import { Navigation } from './src/navigation/Navigation';
import { useAppState } from './src/hooks/useAppState';
import { ImageBackground, StyleSheet } from 'react-native';

import hiddenBackground from './src/screens/home/img/hidden-background.png';

const App: FC = () => {
  const app = useAppState();
  console.log(app);

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
