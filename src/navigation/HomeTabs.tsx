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
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../screens/home/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <View
        // style={{
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   alignContent: 'center',
        //   flex: 1,
        //   height: 500,
        //   width: 100,
        // }}
        >
          <View style={orderStore.orders.length && styles.wrapCountBasket}>
            <Text style={styles.countBasket}>
              {orderStore.orders[0] && orderStore.orders.length}
            </Text>
          </View>
          <Image
            style={props.focused ? styles.iconActive : styles.iconTab}
            source={
              props.focused
                ? require('../screens/home/img/icon-basket-active.png')
                : require('../screens/home/img/icon-basket.png')
            }
          />
        </View>
      </View>
    </View>
  );
});

const TabBarIconHeart: FC<ITabBarIconProps> = (props) => {
  return (
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../screens/home/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <Image
          style={props.focused ? styles.iconActive : styles.iconTab}
          source={
            props.focused
              ? require('../screens/home/img/icon-heart-active.png')
              : require('../screens/home/img/icon-heart.png')
          }
        />
      </View>
    </View>
  );
};

const TabBarIconHome: FC<ITabBarIconProps> = (props) => {
  return (
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../screens/home/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <Image
          style={props.focused ? styles.iconActive : styles.iconTab}
          source={
            props.focused
              ? require('../screens/home/img/icon-home-active.png')
              : require('../screens/home/img/icon-home.png')
          }
        />
      </View>
    </View>
  );
};

const TabBarIconSettings: FC<ITabBarIconProps> = (props) => {
  return (
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../screens/home/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <Image
          style={props.focused ? styles.iconActive : styles.iconTab}
          source={
            props.focused
              ? require('../screens/home/img/icon-setting-active.png')
              : require('../screens/home/img/icon-setting.png')
          }
        />
      </View>
    </View>
  );
};

const TabBarIconUser: FC<ITabBarIconProps> = (props) => {
  return (
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../screens/home/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <Image
          style={props.focused ? styles.iconActive : styles.iconTab}
          source={
            props.focused
              ? require('../screens/home/img/icon-user-active.png')
              : require('../screens/home/img/icon-user.png')
          }
        />
      </View>
    </View>
  );
};

const HomeTabs: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        // tabBarIconStyle: {
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   // margin: 100,
        //   textAlign: 'center',
        //   backgroundColor: 'green',
        // },
        // tabBarItemStyle: {
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   alignContent: 'center',
        //   // margin: 100,
        //   // backgroundColor: 'green',
        // },
        tabBarStyle: styles.tabBarStyle,
      }}
    >
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
    width: 30,
    height: 30,
  },

  tabBarStyle: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,

    elevation: 18,
  },

  iconActive: {
    width: 30,
    height: 30,
  },

  iconTabActiveWrap: {
    width: 70,
    height: 70,
    top: -12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  iconWave: {
    width: 120,
    height: 40,
    zIndex: -1,
    position: 'absolute',
    top: -8,
  },

  iconTabActive: {
    backgroundColor: ColorsVariable.orange,
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',

    alignItems: 'center',
  },

  wrapCountBasket: {
    backgroundColor: ColorsVariable.orange,
    width: 15,
    height: 16,
    right: -4,
    top: -4,
    borderRadius: 8,
    borderColor: ColorsVariable.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
  },

  countBasket: {
    color: ColorsVariable.white,
    fontSize: 12,
    fontWeight: 'bold',
    zIndex: 3,
    position: 'absolute',
  },
});
