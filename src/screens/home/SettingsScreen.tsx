import React, { FC, useCallback, useMemo, useState } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from './Link';

export const SettingsScreen: FC = () => {
  const [count, setCount] = useState(0);
  const [link, setLink] = useState('raect');
  const [link2, setLink2] = useState('vite');
  // console.log('count render');

  const plusCount = () => {
    setCount((prev) => prev + 1);
  };

  const linksText = useMemo(() => {
    return { link, link2 };
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <SafeAreaView style={styles.wrap}>
      <Button title="press" onPress={plusCount}></Button>
      <Text>{count}</Text>
      <Link linksText={linksText} reset={reset}></Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
