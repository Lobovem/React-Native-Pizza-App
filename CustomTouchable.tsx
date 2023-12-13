import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';
import { StyleSheet } from 'react-native';

type CustomTouchableProps = {
  onPress(): void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  withoutFeedback: boolean;
} & (PressableProps | TouchableWithoutFeedbackProps);

export const CustomTouchable: React.FC<CustomTouchableProps> = ({
  onPress,
  children,
  style,
  withoutFeedback,
  ...props
}) => {
  const Component: any = withoutFeedback ? TouchableWithoutFeedback : Pressable;

  return (
    <Component
      onPress={onPress}
      {...props}
      android_ripple={
        withoutFeedback ? undefined : { color: 'red', radius: -5, borderless: false }
      }
      style={
        withoutFeedback
          ? style
          : ({ pressed }) => [
              // {
              //   backgroundColor: pressed ? 'red' : 'green',
              // },
            ]
      }
    >
      {/* {({ pressed }) => (
        <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )} */}
      {children}
    </Component>
  );
};
