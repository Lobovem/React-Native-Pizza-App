import React, { FC, useState } from 'react';
import { Text, StyleSheet, Button, View, FlatList, Pressable, Image } from 'react-native';
import orderStore from '../../store/Orders';
import { SafeAreaView } from 'react-native-safe-area-context';
import ColorsVariable from '../../components/ColorsVariable';

import iconCart from './img/icon-cart.png';
import iconHeart from './img/icon-heartCart.png';
import iconHeartFavorite from './img/icon-heartCartFavorite.png';
import { Observer, observer } from 'mobx-react';

const SettingsScreen: FC = () => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount((prev) => prev + 1);
  };

  const cleanCount = () => {
    setCount(0);
  };

  // const mockItemDatas = orderStore.mockData
  // console.log(orderStore.mockData);

  // console.log(orderStore.mockData);
  const renderItem = ({ item }) => {
    return (
      <Observer>
        {() => (
          <View style={{ marginBottom: 50, backgroundColor: 'red' }}>
            <View style={styles.wrapTitle}></View>

            <View style={styles.wrapDesc}>
              <Text numberOfLines={1} style={styles.desc}>
                {item.description}
              </Text>
            </View>

            <View style={styles.wrapPrice}>
              <Text style={styles.priceNew}>{item.priceNew} $</Text>
              {item.sale && <Text style={styles.priceOld}>{item.priceOld} $</Text>}
            </View>

            <View style={styles.wrapCard}>
              <Pressable onPress={() => orderStore.addToWishList(item)}>
                <Image
                  style={styles.iconHeart}
                  source={item.favorite ? iconHeartFavorite : iconHeart}
                />
              </Pressable>

              <Pressable onPress={() => orderStore.setOrders(item)}>
                <Image style={styles.card} source={iconCart} />
              </Pressable>
            </View>
          </View>
        )}
      </Observer>
    );
  };

  return (
    <SafeAreaView style={styles.wrap}>
      {/* <View>
        {orderStore.mockData.map((item) => (
          <View style={{ marginBottom: 50, backgroundColor: 'red' }}>
            <View style={styles.wrapTitle}></View>

            <View style={styles.wrapDesc}>
              <Text numberOfLines={1} style={styles.desc}>
                {item.description}
              </Text>
            </View>

            <View style={styles.wrapPrice}>
              <Text style={styles.priceNew}>{item.priceNew} $</Text>
              {item.sale && <Text style={styles.priceOld}>{item.priceOld} $</Text>}
            </View>

            <View style={styles.wrapCard}>
              <Pressable onPress={() => orderStore.addToWishList(item)}>
                <Image
                  style={styles.iconHeart}
                  source={item.favorite ? iconHeartFavorite : iconHeart}
                />
              </Pressable>

              <Pressable onPress={() => orderStore.setOrders(item)}>
                <Image style={styles.card} source={iconCart} />
              </Pressable>
            </View>
          </View>
        ))}
      </View> */}
      <FlatList
        data={orderStore.mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        style={{ padding: 50 }}
      />
      {/* <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10.84,
          elevation: 5,
        }}
      ></View> */}
      <Button title="press to add" onPress={plusCount}></Button>
      <Text>{count}</Text>
      <Button title="clean counts" onPress={cleanCount}></Button>
    </SafeAreaView>
  );
};

export default observer(SettingsScreen);

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  mainContainer: {
    backgroundColor: ColorsVariable.white,
  },
  container: {
    backgroundColor: ColorsVariable.white,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  itemsList: {
    backgroundColor: ColorsVariable.white,
    // flex: 1,
    paddingHorizontal: 10,
    paddingTop: 66,
    marginBottom: 60,
  },

  item: {
    marginBottom: 80,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    paddingBottom: 14,
    flexDirection: 'column',
    backgroundColor: ColorsVariable.white,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    gap: 10,
    borderRadius: 20,
    minHeight: 100,
    shadowColor: ColorsVariable.black,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 25,
    flex: 1,
  },

  img: {
    width: 150,
    height: 150,
    top: -50,
  },

  iconNew: {
    position: 'absolute',
    maxHeight: 44,
    right: -15,
    top: -15,
    resizeMode: 'contain',
    transform: [{ rotate: '-14deg' }],
  },

  wrapTitle: {
    top: -40,
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  title: {
    fontSize: 20,
    color: ColorsVariable.black,
    fontWeight: 'bold',
    textAlign: 'center',

    // flex: 1,
    // flexWrap: 'wrap',
  },

  wrapDesc: {
    top: -40, // flexDirection: 'row',
    // alignItems: 'center',
    // gap: 30,
  },

  desc: {
    fontSize: 16,
    color: ColorsVariable.grey,
    // flex: 1,
  },

  wrapPrice: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    top: -30,
  },

  priceNew: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  priceOld: {
    fontSize: 22,
    textDecorationLine: 'line-through',
    fontWeight: 'bold',

    color: ColorsVariable.orange,
  },

  wrapCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // alignItems: 'flex-start',
    // alignItems: 'center',
  },

  iconHeart: {
    width: 30,
    height: 30,
    // marginLeft: 'auto',
  },

  card: {
    width: 30,
    height: 30,
  },
});
