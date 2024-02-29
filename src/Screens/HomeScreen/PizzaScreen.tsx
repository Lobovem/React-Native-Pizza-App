import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import iconHeart from './img/icon-heartCart.png';
import iconHeartFavorite from './img/icon-heartCartFavorite.png';
import ColorsVariable from '../../utils/ColorsVariable';
import { IMockData } from './components/MochData';
import { RootStackParamListType } from '../../navigation/HomeStackScreen';

import orderStore from '../../store/Orders';
import { observer } from 'mobx-react';

const PizzaScreen: FC = () => {
  const route = useRoute<RouteProp<RootStackParamListType, 'Pizza'>>();
  const { item } = route.params;

  // const item = items.mockItemDatas.find((item: IMockData) => item.id === items.id);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const [optionsItem, setOptionsItem] = useState(item.options);

  const addQuantity = (): void => {
    setItemQuantity((prev: number) => prev + 1);
  };

  const removeQuantity = (): void => {
    if (itemQuantity > 1) {
      setItemQuantity((prev: number) => prev - 1);
    }
  };

  const addToOrder = (item: IMockData): void => {
    //i did exacly that becouse i change value with item outside (i get item from homeScreen)
    const updateItem = { ...item };
    updateItem.quantity = itemQuantity;
    updateItem.options = optionsItem;

    orderStore.setOrders(updateItem);
    setItemQuantity(1);
  };

  const hanldeActiveOption = (name: string): void => {
    const updatedOptions = orderStore.handleItemOptions(name, optionsItem);

    // Обновляем состояние опций в компоненте
    setOptionsItem(updatedOptions);
  };

  return (
    item && (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.itemWrap}>
          <View style={styles.imgWrap}>
            <Image style={styles.img} source={item.img}></Image>
          </View>

          <View style={styles.quantityWrap}>
            <TouchableOpacity onPress={removeQuantity}>
              <Text style={styles.quantity}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>{itemQuantity}</Text>

            <TouchableOpacity onPress={addQuantity}>
              <Text style={styles.quantity}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapTitle}>
            <Text style={styles.title}>{item.title}</Text>
          </View>

          <View style={styles.optionsItemWrap}>
            {optionsItem?.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={option.active ? styles.optionsItemActive : styles.optionsItem}
                onPress={() => hanldeActiveOption(option.name)}
              >
                <Text
                  style={
                    option.active
                      ? styles.optionsItemTitleActive
                      : styles.optionsItemTitle
                  }
                >
                  {option.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.priceWrap}>
            <Text style={styles.priceNew}>{item.priceNew} $</Text>
            {item.sale && <Text style={styles.priceOld}>{item.priceOld} $</Text>}
          </View>

          <Text style={styles.desc}>{item.description}</Text>

          <View style={styles.buyWrap}>
            <TouchableOpacity onPress={() => orderStore.handleFavoriteItem(item)}>
              <Image
                style={styles.iconHeart}
                source={item.favorite ? iconHeartFavorite : iconHeart}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cart} onPress={() => addToOrder(item)}>
              <Text style={styles.cartTitle}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  );
};

export default observer(PizzaScreen);

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
    fontFamily: 'outfit-medium',
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
    fontFamily: 'outfit-medium',
  },

  optionsItemTitleActive: {
    fontSize: 30,
    color: ColorsVariable.white,
  },

  desc: {
    marginBottom: 30,
    fontSize: 16,
    fontFamily: 'outfit-regular',
  },

  priceWrap: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    gap: 20,
  },

  priceNew: {
    fontSize: 30,
    fontFamily: 'outfit-bold',
  },

  priceOld: {
    fontSize: 30,
    fontFamily: 'outfit-bold',
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
    alignSelf: 'center',
    fontFamily: 'outfit-medium',
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

  cartTitle: {
    fontSize: 30,
    color: ColorsVariable.white,
    fontFamily: 'outfit-medium',
  },
});
