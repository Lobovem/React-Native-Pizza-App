import { Pressable, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet } from 'react-native';

export const CustomTouchable = ({
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
      android_ripple={{ color: 'red', radius: -5, borderless: false }}
      style={({ pressed }) => [
        // {
        //   backgroundColor: pressed ? 'red' : 'green',
        // },
      ]}
    >
      {/* {({ pressed }) => (
        <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )} */}
      {children}
    </Component>
  );
};
