import { useNavigation, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MockDataType } from './components/MochData';

export const PizzaScreen: any = ({ route }) => {
  const { mockItemDatas, setMockItemData } = route.params;
  // console.log('mockItemDatas', mockItemDatas);
  console.log('param', route.params);

  // const route = useRoute();

  const filterItem = (mockItemDatas: MockDataType, id: string) => {
    // mockItemDatas.filter((item) => {});
  };

  // console.log('route', route.params);

  return <SafeAreaView>{/* <Text>{item.title}</Text> */}</SafeAreaView>;
};
