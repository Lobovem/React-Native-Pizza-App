import React from 'react';
import { Pressable, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet, Text } from 'react-native';

// export const CustomTouchable = (onPress, children, style, withoutFeedback, ...props) => {
export const CustomTouchable = ({ onPress, style, children }) => {
  // export const CustomTouchable = (onPress, children, ...props) => {
  // const Component = withoutFeedback ? TouchableWithoutFeedback : Pressable;
  const Component = Pressable;

  return (
    <Component
      onPress={onPress}
      android_ripple={{ color: 'red', radius: -5, borderless: false }}
      style={({ pressed }) => [
        // {
        //   backgroundColor: pressed ? 'red' : 'green',
        // },
        style,
      ]}
    >
      {({ pressed }) => (
        <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )}
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
