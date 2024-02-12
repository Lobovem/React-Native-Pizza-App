import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../screens/home/SettingsScreen';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeStackScreen from './HomeStackScreen';
import BasketScreen from '../screens/home/BasketScreen';

import orderStore from '../store/Orders';
import { observer } from 'mobx-react';
import ColorsVariable from '../components/ColorsVariable';

interface ITabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const TabIconBasket = observer((props: ITabBarIconProps) => {
  return (
    <View>
      <View style={orderStore.orders.length && styles.wrapCountBasket}>
        <Text style={styles.countBasket}>
          {orderStore.orders[0] ? orderStore.orders.length : ''}
        </Text>
      </View>
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
});

const TabBarIconHeart: FC<ITabBarIconProps> = (props) => {
  return (
    <Image
      style={styles.iconTab}
      source={
        props.focused
          ? require('../screens/home/img/icon-heart.png')
          : require('../screens/home/img/icon-heart.png')
      }
    />
  );
};

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

const TabBarIconUser: FC<ITabBarIconProps> = (props) => {
  return (
    <Image
      style={styles.iconTab}
      source={
        props.focused
          ? require('../screens/home/img/icon-user.png')
          : require('../screens/home/img/icon-user.png')
      }
    />
  );
};

const HomeTabs: FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name="CART"
        options={{
          tabBarIcon: (props) => <TabIconBasket {...props} />,
        }}
        component={BasketScreen}
      />

      <Tab.Screen
        name="FAVORITE"
        options={{
          tabBarIcon: TabBarIconHeart,
        }}
        component={BasketScreen}
      />

      <Tab.Screen
        name="HOME"
        options={{
          tabBarIcon: TabBarIconHome,
        }}
        component={HomeStackScreen}
      />

      <Tab.Screen
        name="SETTINGS"
        options={{ tabBarIcon: TabBarIconSettings }}
        component={SettingsScreen}
      />

      <Tab.Screen
        name="USER"
        options={{ tabBarIcon: TabBarIconUser }}
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

  wrapCountBasket: {
    backgroundColor: ColorsVariable.orange,
    width: 15,
    height: 16,
    right: -16,
    top: 10,
    borderRadius: 8,
    borderColor: ColorsVariable.black,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    // position: 'absolute',
    // right: -10,
    // top: -10,
    // width: 15,
    // height: 15,
  },
  countBasket: {
    color: ColorsVariable.white,
    fontSize: 12,
    fontWeight: 'bold',
    zIndex: 3,
    // right: 0,
    // top: 0,
  },
});
