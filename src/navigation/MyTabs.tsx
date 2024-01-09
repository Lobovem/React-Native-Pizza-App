import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { HomeScreens } from '../screens/home/HomeScreen';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const TabBarIconSettings = () => {
  return (
    <Image
      style={styles.iconTab}
      source={require('../screens/home/img/icon-setting.png')}
    />
  );
};
const TabBarIconHome = () => {
  return (
    <Image
      style={styles.iconTab}
      source={require('../screens/home/img/icon-home.png')}
    />
  );
};

export const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        options={{ tabBarIcon: TabBarIconHome }}
        component={HomeScreens}
      />
      <Tab.Screen
        name="Settings"
        options={{ tabBarIcon: TabBarIconSettings }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconTab: {
    width: 26,
    height: 26,
  },
});
