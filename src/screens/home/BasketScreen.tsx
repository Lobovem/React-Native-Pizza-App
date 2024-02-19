import React, { FC } from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import orderStore from '../../store/Orders';
import { observer } from 'mobx-react';
import { IMockData } from './components/MochData';
import { generateUniqueKey } from '../../common/generateUniqueKey';
import ColorsVariable from '../../components/ColorsVariable';

const BasketScreen: FC = () => {
  const calcSumOrders = orderStore.orders.reduce(
    (acc, item) => item.priceNew * item.quantity + acc,
    0
  );

  const removeItemFromOrder = (item: IMockData): void => {
    orderStore.removeOrders(item);
  };

  const sendOrder = (): void => {
    orderStore.removeOrders([]);
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Cart</Text>

        <View>
          {orderStore.orders[0] ? (
            orderStore.orders.map((item) => (
              <View key={generateUniqueKey()} style={styles.item}>
                <Image source={`${item.img}`} style={styles.itemImg} />

                <View style={styles.wrapItemInfo}>
                  <View style={styles.wrapTitle}>
                    <Text style={styles.titleItem}>{item.title}</Text>

                    <Pressable
                      style={styles.removeItem}
                      onPress={() => removeItemFromOrder(item)}
                    >
                      <Text style={styles.removeItemTitle}>X</Text>
                    </Pressable>
                  </View>

                  <Text style={styles.priceItem}>{item.priceNew} $</Text>

                  <View style={styles.optionsWrap}>
                    {item.options.map(
                      (item, index) =>
                        item.active && (
                          <Text key={index} style={styles.optionItem}>
                            size: {item.name}
                          </Text>
                        )
                    )}

                    <View style={styles.quantityWrap}>
                      <Pressable onPress={() => orderStore.delQuantity(item)}>
                        <Text style={styles.quantity}>-</Text>
                      </Pressable>

                      <Text style={styles.quantity}>{item.quantity}</Text>

                      <Pressable onPress={() => orderStore.addQuantity(item)}>
                        <Text style={styles.quantity}>+</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View>
              <Image
                style={styles.iconCart}
                source={require('../home/img/icon-cartLarge.png')}
              />
            </View>
          )}
        </View>

        <View style={styles.wrapTotalPrice}>
          <Text style={styles.totalPrice}>Total order: {calcSumOrders} $</Text>
        </View>

        {orderStore.orders[0] && (
          <View style={styles.orderSendBox}>
            <Pressable onPress={sendOrder} style={styles.orderSendWrap}>
              <Text style={styles.orderSendTitle}>Send order</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(BasketScreen);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: ColorsVariable.white,
  },
  item: {
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    paddingBottom: 14,
    // flexDirection: 'column',
    backgroundColor: ColorsVariable.white,
    // justifyContent: 'space-between',
    // alignItems: 'center',
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
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },

  wrapItem: {
    // justifyContent:
    // alignSelf: 'center',
    // alignContent: 'center',
  },

  itemImg: {
    width: 100,
    height: 100,
    // top: -50,
  },

  title: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 100,
  },

  wrapItemInfo: {
    flex: 1,
    gap: 6,
    // alignSelf: 'center',
    // alignItems: 'center',
  },

  iconCart: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    marginRight: 50,
  },

  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleItem: {
    fontSize: 20,
    color: ColorsVariable.black,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    flex: 1,
  },

  removeItem: {
    backgroundColor: ColorsVariable.orange,
    borderRadius: 30,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  removeItemTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  priceItem: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  optionsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  optionItem: {
    fontSize: 22,
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
    width: 100,
    height: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  orderSendBox: {
    marginTop: 30,
    marginBottom: 50,
    // backgroundColor: 'red',
    marginRight: 20,
    marginLeft: 20,
    // flex: 1,
  },
  orderSendWrap: {
    borderRadius: 20,
    backgroundColor: ColorsVariable.orange,
    // width: 300,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },

  wrapTotalPrice: {
    marginTop: 20,
    alignItems: 'center',
  },

  totalPrice: {
    fontSize: 30,
  },

  orderSendTitle: {
    textAlign: 'center',
    fontWeight: '600',
    padding: 6,
    fontSize: 20,
    color: ColorsVariable.white,
  },
});
