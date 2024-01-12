import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { MyTabs } from './MyTabs';
import { PizzaScreen } from '../screens/home/PizzaScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorsVariable from '../components/Colors';
import { IMockDataType } from '../screens/home/components/MochData';
import { ModalScreen } from '../screens/home/ModalScreen';

export type RootStackParamList = {
  Home: undefined; // No additional parameters for the Home screen
  Pizza: { id: string; mockItemDatas: IMockDataType[] }; // Parameters for the Pizza screen
  Modal: { id: string; mockItemDatas: IMockDataType[] }; // Parameters for the Pizza screen
  // ... other screens
};

const HomeStack = createNativeStackNavigator();

export const Navigations: FC = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Group>
          <HomeStack.Screen
            name="Home"
            component={MyTabs}
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

        <HomeStack.Group
          screenOptions={{ presentation: 'containedModal', headerShown: false }}
        >
          <HomeStack.Screen name="Modal" component={ModalScreen} />
        </HomeStack.Group>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};
