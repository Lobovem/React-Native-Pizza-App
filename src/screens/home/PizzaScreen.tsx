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
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.imgWrap}>
            <Image style={styles.img} source={item.img}></Image>
          </View>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.iconHeart} source={iconHeart}></Image>
          </View>
          <Text style={styles.desc}>{item.description}</Text>
          <View style={styles.buyWrap}>
            <View style={styles.wrapPrice}>
              <Text style={styles.titlePrice}>Price:</Text>
              <View style={styles.priceWrap}>
                <Text style={styles.priceNew}>{item.priceNew} $</Text>
                {item.sale && <Text style={styles.priceOld}>{item.priceOld} $</Text>}
              </View>
            </View>

            <Pressable style={styles.boxCard} onPress={() => addToOrder(item)}>
              <View style={styles.wrapCard}>
                <Image style={styles.card} source={iconCart}></Image>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: ColorsVariable.white,
  },

  imgWrap: {
    alignItems: 'center',
    marginBottom: 40,
  },
  img: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
  },
  wrapTitle: {
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconHeart: {
    marginLeft: 'auto',
    width: 34,
    height: 34,
  },
  desc: {
    marginBottom: 40,
    fontSize: 16,
  },

  buyWrap: {
    flexDirection: 'row',
  },
  wrapPrice: {},
  priceWrap: {
    flexDirection: 'row',
    gap: 10,
  },
  titlePrice: {
    marginBottom: 6,
    fontSize: 20,
  },
  priceNew: {
    fontSize: 20,
    fontWeight: '800',
  },

  priceOld: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    color: ColorsVariable.orange,
  },

  boxCard: {
    flex: 1,
    flexDirection: 'row',
  },
  wrapCard: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleCard: {
    fontSize: 16,
    fontWeight: '600',
  },

  card: {
    maxWidth: 40,
    maxHeight: 40,
  },
});
