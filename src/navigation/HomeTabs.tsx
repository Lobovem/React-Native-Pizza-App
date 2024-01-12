import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../screens/home/SettingsScreen';
import { Image, StyleSheet } from 'react-native';
import { HomeStackScreen } from './HomeStackScreen';

interface ITabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const TabBarIconHome: FC<ITabBarIconProps> = (props) => {
  return (
    <Image
      style={styles.iconTab}
      source={
        props.focused
          ? require('../screens/home/img/icon-home-active.png')
          : require('../screens/home/img/icon-home.png')
      }
    />
  );
};

const TabBarIconSettings: FC<ITabBarIconProps> = (props) => {
  return (
    <Image
      style={styles.iconTab}
      source={
        props.focused
          ? require('../screens/home/img/icon-setting-active.png')
          : require('../screens/home/img/icon-setting.png')
      }
    />
  );
};

export const HomeTabs: FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Main"
        options={{
          tabBarIcon: TabBarIconHome,
        }}
        component={HomeStackScreen}
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
