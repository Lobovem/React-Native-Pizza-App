import { FC } from 'react';
import { Navigation } from './src/navigation/Navigation';
import { useAppState } from './src/hooks/useAppState';
import { ImageBackground, StyleSheet } from 'react-native';

import hiddenBackground from './src/screens/home/img/hidden-background.jpeg';

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
  );
};

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
    resizeMode: 'cover',
  },
});

export default App;
