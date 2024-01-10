import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from './src/screens/home/SettingsScreen';
import { MyTabs } from './src/navigation/MyTabs';
import { HomeScreens } from './src/screens/home/HomeScreen';
import { PizzaScreen } from './src/screens/home/PizzaScreen';

const HomeStack = createNativeStackNavigator();

const App: FC = () => {
  // return <Navigation />;
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        {/* <HomeStack.Screen name="Home" component={MyTabs} /> */}
        <HomeStack.Screen name="Home" component={HomeScreens} />
        <HomeStack.Screen name="Pizza" component={PizzaScreen} />
        <HomeStack.Screen name="Setting" component={SettingsScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
