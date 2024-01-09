import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const SettingsScreen = () => {
  return (
    <View style={styles.wrap}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
