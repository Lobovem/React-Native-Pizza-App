import React, { FC } from 'react';
import { PizzaScreen } from '../screens/home/PizzaScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorsVariable from '../components/Colors';
import { IMockData } from '../screens/home/components/MochData';
import { ModalScreen } from '../screens/home/ModalScreen';
import { HomeScreens } from '../screens/home/HomeScreen';

export type RootStackParamListType = {
  Home: undefined; // No additional parameters for the Home screen
  Pizza: { id: string; mockItemDatas: IMockData[] }; // Parameters for the Pizza screen
  Modal: { id: string; mockItemDatas: IMockData[] }; // Parameters for the Pizza screen
  // ... other screens
};

export const HomeStackScreen: FC = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen
          name="Home"
          component={HomeScreens}
          options={{ headerShown: false }}
        />

        <HomeStack.Screen
          name="Pizza"
          component={PizzaScreen}
          options={{
            headerStyle: { backgroundColor: ColorsVariable.greyLight },
            headerTitle: '',
          }}
        />
      </HomeStack.Group>

      <HomeStack.Group>
        <HomeStack.Screen
          name="Modal"
          options={{ presentation: 'modal', headerShown: false }}
          component={ModalScreen}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};
