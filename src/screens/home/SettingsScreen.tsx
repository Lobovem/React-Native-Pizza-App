import React, { FC, useState } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, deleteOrder } from '../../store/counterSlice';
import { RootState } from '../../store/store';

export const SettingsScreen: FC = () => {
  const order = useSelector((state) => state.orders.countOrder);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);

  console.log(order);

  const plusCount = () => {
    dispatch(addOrder());
  };

  const cleanCount = () => {
    dispatch(deleteOrder());
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <Button title="press to add" onPress={plusCount}></Button>
      <Text>{order}</Text>
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
