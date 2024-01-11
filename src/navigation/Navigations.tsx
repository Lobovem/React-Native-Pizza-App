import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { MyTabs } from './MyTabs';
import { PizzaScreen } from '../screens/home/PizzaScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export const Navigations: FC = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="Pizza"
          component={PizzaScreen}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};
