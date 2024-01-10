import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.wrap}>
      <Text>Settings Screen</Text>
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
