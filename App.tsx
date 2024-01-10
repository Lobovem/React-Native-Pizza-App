import { FC, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from './src/screens/home/SettingsScreen';
import { MyTabs } from './src/navigation/MyTabs';
import { HomeScreens } from './src/screens/home/HomeScreen';
import { PizzaScreen } from './src/screens/home/PizzaScreen';
import { mockItemData } from './src/screens/home/components/MochData';

const HomeStack = createNativeStackNavigator();

const App: any = () => {
  const [mockItemDatas, setMockItemData] = useState(mockItemData);

  // return <Navigation />;
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        {/* <HomeStack.Screen name="Home" component={MyTabs} /> */}
        <HomeStack.Screen
          name="Home"
          component={HomeScreens}
          initialParams={{ mockItemDatas, setMockItemData }}
        />
        <HomeStack.Screen
          name="Pizza"
          component={PizzaScreen}
          initialParams={{ mockItemDatas, setMockItemData }}
        />
        <HomeStack.Screen name="Setting" component={SettingsScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
