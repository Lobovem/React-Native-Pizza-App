import React, { FC, useState } from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SettingsScreen: FC = () => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount((prev) => prev + 1);
  };

  const cleanCount = () => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10.84,
          elevation: 5,
        }}
      ></View>
      <Button title="press to add" onPress={plusCount}></Button>
      <Text>{count}</Text>
      <Button title="clean counts" onPress={cleanCount}></Button>
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
