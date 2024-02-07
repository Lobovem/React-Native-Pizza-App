import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../screens/home/SettingsScreen';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeStackScreen from './HomeStackScreen';
import BasketScreen from '../screens/home/BasketScreen';

import orderStore from '../store/Orders';
import { observer } from 'mobx-react';
import { useSelector } from 'react-redux';

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

const TabIconBasket: FC<ITabBarIconProps> = (props) => {
  const countOrders = useSelector((state) => state.orders.countOrder);

  return (
    <View>
      <Text style={styles.countBasket}>{countOrders ? countOrders.length : ''}</Text>
      <Image
        style={styles.iconTab}
        source={
          props.focused
            ? require('../screens/home/img/icon-basket-active.png')
            : require('../screens/home/img/icon-basket.png')
        }
      />
    </View>
  );
};

const HomeTabs: FC = () => {
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
        name="Basket"
        options={{
          tabBarIcon: (props) => <TabIconBasket {...props} />,
        }}
        component={BasketScreen}
      />

      <Tab.Screen
        name="Settings"
        options={{ tabBarIcon: TabBarIconSettings }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({
  iconTab: {
    width: 26,
    height: 26,
  },
  countBasket: {
    position: 'absolute',
    right: -10,
    top: -10,
  },
});
