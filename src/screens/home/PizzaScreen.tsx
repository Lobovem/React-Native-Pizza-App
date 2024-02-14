import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import iconCart from './img/icon-cart.png';
import iconHeart from './img/icon-heartCart.png';
import ColorsVariable from '../../components/ColorsVariable';
import { IMockData } from './components/MochData';
import { RootStackParamListType } from '../../navigation/HomeStackScreen';

import orderStore from '../../store/Orders';

export const PizzaScreen: FC = () => {
  const route = useRoute<RouteProp<RootStackParamListType, 'Pizza'>>();
  const items = route.params;

  const item = items.mockItemDatas.find((item: IMockData) => item.id === items.id);

  const addToOrder = (item: IMockData): void => {
    orderStore.setOrders(item);
  };

  return (
    item && (
      // <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.itemWrap}>
          <View style={styles.imgWrap}>
            <Image style={styles.img} source={item.img}></Image>
          </View>

          <View style={styles.quantityWrap}>
            <Text style={styles.quantity}>-</Text>
            <Text style={styles.quantity}>3</Text>
            <Text style={styles.quantity}>+</Text>
          </View>

          <View style={styles.wrapTitle}>
            <Text style={styles.title}>{item.title}</Text>
          </View>

          <View style={styles.optionsItemWrap}>
            <View style={styles.optionsItem}>
              <Text style={styles.optionsItemTitle}>S</Text>
            </View>

            <View style={styles.optionsItemActive}>
              <Text style={styles.optionsItemTitleActive}>M</Text>
            </View>

            <View style={styles.optionsItem}>
              <Text style={styles.optionsItemTitle}>L</Text>
            </View>
          </View>

          <View style={styles.priceWrap}>
            <Text style={styles.priceNew}>{item.priceNew} $</Text>
            {item.sale && <Text style={styles.priceOld}>{item.priceOld} $</Text>}
          </View>

          {/* <View style={{ flexDirection: 'row' }}>
             <Image style={styles.iconHeart} source={iconHeart} />
        
             <Image style={styles.iconHeart} source={iconCart} />
           </View> */}

          <Text style={styles.desc}>{item.description}</Text>

          <View style={styles.buyWrap}>
            <Image style={styles.iconHeart} source={iconHeart} />
            <Pressable style={styles.cart} onPress={() => addToOrder(item)}>
              <Text style={{ fontSize: 30, color: ColorsVariable.white }}>
                Add to cart
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      // </SafeAreaView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: ColorsVariable.white,
    showsVerticalScrollIndicator: 'true',
    paddingTop: 20,
  },

  itemWrap: {
    paddingBottom: 80,
  },

  imgWrap: {
    alignItems: 'center',
    marginBottom: 30,
  },

  img: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
  },
  wrapTitle: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  optionsItemWrap: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },

  optionsItem: {
    width: 80,
    height: 50,
    backgroundColor: '#FCE6D9',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionsItemActive: {
    width: 80,
    height: 50,
    backgroundColor: ColorsVariable.orange,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionsItemTitle: {
    fontSize: 30,
    color: ColorsVariable.black,
  },

  optionsItemTitleActive: {
    fontSize: 30,
    color: ColorsVariable.white,
  },

  desc: {
    marginBottom: 30,
    fontSize: 16,
  },

  priceWrap: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    gap: 20,
  },

  priceNew: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  priceOld: {
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    color: ColorsVariable.orange,
  },

  quantityWrap: {
    flexDirection: 'row',
    borderRadius: 28,
    backgroundColor: ColorsVariable.white,
    shadowColor: ColorsVariable.black,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 25,
    width: 150,
    height: 40,
    justifyContent: 'space-evenly',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },

  quantity: {
    fontSize: 30,
    // fontWeight: 'bold',
    alignSelf: 'center',
  },

  buyWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  iconHeart: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  cart: {
    width: 270,
    height: 60,
    backgroundColor: ColorsVariable.orange,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleCard: {
    fontSize: 16,
    fontWeight: '600',
  },
});
