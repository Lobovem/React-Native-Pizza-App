import { FC } from 'react';
import { Navigation } from './src/navigation/Navigation';
import { useAppState } from './src/hooks/useAppState';
import { Image, StyleSheet } from 'react-native';

import hiddenBackground from './src/screens/home/img/hidden-background.jpeg';

const App: FC = () => {
  const app = useAppState();
  console.log(app);

  return (
    <>
      {app === 'inactive' && (
        <Image source={hiddenBackground} style={styles.wrap}></Image>
      )}
      <Navigation />
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    width: '100%', // или другие значения по необходимости
    height: '100%',
  },
});

export default App;
