import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { MyTabs } from './MyTabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Settings } from 'react-native';
import { HomeScreens } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../screens/home/SettingsScreen';

// const Stack = createStackNavigator();

// export function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreens} />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export const Navigations: FC = () => {
//   return (
//     // <NavigationContainer>
//     <MyTabs />
//     // </NavigationContainer>
//   );
// };
