import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BenefitsScreen } from '../Screens/BenefitsScreen/BenefitsScreen';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeStackScreen from './HomeStackScreen';

import orderStore from '../store/Orders';
import { observer } from 'mobx-react';
import ColorsVariable from '../components/ColorsVariable';
import BasketScreen from '../Screens/BasketScreen/BasketScreen';
import WishList from '../Screens/WishListScreen/WishList';
import SignInScreen from '../Screens/ProfileScreen/SignInScreen';

interface ITabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const TabIconBasket: FC<ITabBarIconProps> = observer((props) => {
  return (
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../Screens/HomeScreen/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <View>
          <View
            style={
              props.focused
                ? orderStore.orders.length && styles.wrapCountBasketActive
                : orderStore.orders.length && styles.wrapCountBasket
            }
          >
            <Text style={props.focused ? styles.countBasketActive : styles.countBasket}>
              {orderStore.orders[0] && orderStore.orders.length}
            </Text>
          </View>

          <Image
            style={props.focused ? styles.iconActive : styles.iconTab}
            source={
              props.focused
                ? require('../Screens/HomeScreen/img/icon-cart-active.png')
                : require('../Screens/HomeScreen/img/icon-cart.png')
            }
          />
        </View>
      </View>
    </View>
  );
});

const TabBarIconHeart: FC<ITabBarIconProps> = observer((props) => {
  return (
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../Screens/HomeScreen/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <View>
          <View
            style={
              props.focused
                ? orderStore.wishList.length && styles.wrapCountBasketActive
                : orderStore.wishList.length && styles.wrapCountBasket
            }
          >
            <Text style={props.focused ? styles.countBasketActive : styles.countBasket}>
              {orderStore.wishList[0] && orderStore.wishList.length}
            </Text>
          </View>

          <Image
            style={props.focused ? styles.iconActive : styles.iconTab}
            source={
              props.focused
                ? require('../Screens/HomeScreen/img/icon-heartCart-active.png')
                : require('../Screens/HomeScreen/img/icon-heartCart.png')
            }
          />
        </View>
      </View>
    </View>
  );
});

const TabBarIconHome: FC<ITabBarIconProps> = observer((props) => {
  return (
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../Screens/HomeScreen/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <Image
          style={props.focused ? styles.iconActive : styles.iconTab}
          source={
            props.focused
              ? require('../Screens/HomeScreen/img/icon-home-active.png')
              : require('../Screens/HomeScreen/img/icon-home.png')
          }
        />
      </View>
    </View>
  );
});

const TabBarIconBanner: FC<ITabBarIconProps> = observer((props) => {
  return (
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../Screens/HomeScreen/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <Image
          style={props.focused ? styles.iconActive : styles.iconTab}
          source={
            props.focused
              ? require('../Screens/HomeScreen/img/icon-discount-active.png')
              : require('../Screens/HomeScreen/img/icon-discount.png')
          }
        />
      </View>
    </View>
  );
});

const TabBarIconUser: FC<ITabBarIconProps> = observer((props) => {
  return (
    <View style={props.focused && styles.iconTabActiveWrap}>
      <Image
        style={styles.iconWave}
        source={require('../Screens/HomeScreen/img/icon-wave.png')}
      />
      <View style={props.focused && styles.iconTabActive}>
        <Image
          style={props.focused ? styles.iconActive : styles.iconTab}
          source={
            props.focused
              ? require('../Screens/HomeScreen/img/icon-user-active.png')
              : require('../Screens/HomeScreen/img/icon-user.png')
          }
        />
      </View>
    </View>
  );
});

const TabNavigation: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: ColorsVariable.orange },
        headerTintColor: 'white',
        tabBarShowLabel: false,

        tabBarIconStyle: {},
        tabBarItemStyle: {
          // justifyContent: 'center',
          // alignItems: 'center',
          // alignContent: 'center',
          // margin: 100,
          // backgroundColor: 'green',
        },
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="CART"
        options={{
          tabBarIcon: (props) => <TabIconBasket {...props} />,
          headerShown: true,
          headerStyle: { backgroundColor: ColorsVariable.orange },
          headerTintColor: 'white',
        }}
        component={BasketScreen}
      />

      <Tab.Screen
        name="FAVORITE"
        options={{
          tabBarIcon: (props) => <TabBarIconHeart {...props} />,
        }}
        component={WishList}
      />

      <Tab.Screen
        name="HOME"
        options={{
          // tabBarIcon: TabBarIconHome,
          tabBarIcon: (props) => <TabBarIconHome {...props} />,
          headerShown: false,
        }}
        component={HomeStackScreen}
      />

      <Tab.Screen
        name="BENEFITS"
        options={{
          tabBarIcon: (props) => <TabBarIconBanner {...props} />,
          headerShown: false,
        }}
        component={BenefitsScreen}
      />

      <Tab.Screen
        name="USER"
        options={{
          tabBarIcon: (props) => <TabBarIconUser {...props} />,
        }}
        component={SignInScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  iconTab: {
    width: 30,
    height: 30,
  },

  tabBarStyle: {
    shadowColor: ColorsVariable.black,
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
    top: -20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  iconWave: {
    width: 120,
    height: 40,
    zIndex: -1,
    position: 'absolute',
    top: -2,
  },

  iconTabActive: {
    backgroundColor: ColorsVariable.orange,
    width: 50,
    height: 50,
    top: 8,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapCountBasket: {
    backgroundColor: ColorsVariable.orange,
    width: 16,
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

  wrapCountBasketActive: {
    backgroundColor: ColorsVariable.white,
    width: 16,
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

  countBasketActive: {
    color: ColorsVariable.black,
    fontSize: 12,
    fontWeight: 'bold',
    zIndex: 3,
    position: 'absolute',
  },
});
