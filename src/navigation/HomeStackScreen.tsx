import React, { FC } from 'react';
import PizzaScreen from '../Screens/HomeScreen/PizzaScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorsVariable from '../components/ColorsVariable';
import { IMockData } from '../Screens/HomeScreen/components/MochData';
import { ModalScreen } from '../Screens/HomeScreen/ModalScreen';
import HomeScreens from '../Screens/HomeScreen/HomeScreen';

export type RootStackParamListType = {
  Home: undefined; // No additional parameters for the Home screen
  Pizza: { item: IMockData }; // Parameters for the Pizza screen
  // Pizza: { id: string; mockItemDatas: IMockData[] }; // Parameters for the Pizza screen
  Modal: { id: string; mockItemDatas: IMockData[] }; // Parameters for the Pizza screen
  // ... other screens
};

const HomeStackScreen: FC = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: ColorsVariable.orange },
      }}
    >
      <HomeStack.Group>
        <HomeStack.Screen
          name="Home"
          component={HomeScreens}
          options={{ headerShown: false }}
        />

        <HomeStack.Screen
          name="Pizza"
          component={PizzaScreen}
          // options={
          //   {
          //     // headerStyle: { backgroundColor: ColorsVariable.greyLight },
          //     // headerTitle: '',
          //   }
          options={{ headerShown: true }}
        />
      </HomeStack.Group>

      <HomeStack.Group>
        <HomeStack.Screen
          name="Modal"
          options={{
            presentation: 'containedTransparentModal',
            // presentation: 'transparentModal',
            headerShown: false,
          }}
          component={ModalScreen}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
