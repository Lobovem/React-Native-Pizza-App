import React, { FC, ReactNode } from 'react';
import {
  Platform,
  Pressable,
  PressableProps,
  StyleProp,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';

type CustomTouchableProps = {
  onPress(): void;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  withoutFeedback: boolean;
} & (PressableProps | TouchableWithoutFeedbackProps);

export const CustomTouchable: FC<CustomTouchableProps> = ({
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
      style={({ pressed }) => [
        Platform.OS === 'ios' && { opacity: pressed ? 0.8 : 1 },
        { overflow: 'hidden' },
        style,
      ]}
    >
      {/* {({ pressed }) => (
        <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )} */}
      {children}
    </Component>
  );
};
