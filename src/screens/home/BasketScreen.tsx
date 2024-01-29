import React, { FC } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import orderStore from '../../store/Orders';
import { observer } from 'mobx-react';
import { IMockData } from './components/MochData';
import { generateUniqueKey } from '../../common/generateUniqueKey';
import ColorsVariable from '../../components/Colors';

const BasketScreen: FC = () => {
  const calcSumOrders = orderStore.orders.reduce((acc, item) => item.priceNew + acc, 0);

  const removeItemFromOrder = (item: IMockData): void => {
    let orders = orderStore.orders.filter((order) => order.id !== item.id);
    orderStore.removeOrders(orders);
  };

  const sendOrder = (): void => {
    orderStore.removeOrders([]);
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <Text style={styles.title}>Cart</Text>

      <View>
        {orderStore.orders[0] ? (
          orderStore.orders.map((item) => (
            <View key={generateUniqueKey()} style={styles.wrapItems}>
              <Text style={styles.titleItem}>{item.title}</Text>
              <Text style={styles.priceItem}>{item.priceNew}</Text>
              <Button title="delete" onPress={() => removeItemFromOrder(item)} />
            </View>
          ))
        ) : (
          <View>
            <Image
              style={styles.iconCart}
              source={require('../home/img/icon-cart.png')}
            />
          </View>
        )}
      </View>

      <View style={styles.wrapPrice}>
        <Text style={styles.totalPrice}>Total order: {calcSumOrders} UAH</Text>
      </View>

      {orderStore.orders[0] && (
        <View style={styles.orderSendBox}>
          <Pressable onPress={sendOrder} style={styles.orderSendWrap}>
            <Text style={styles.orderSendTitle}>Send order</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default observer(BasketScreen);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    // justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  wrapItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 100,
  },
  iconCart: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    marginRight: 50,
  },
  wrapPrice: {
    marginTop: 50,
    alignItems: 'center',
  },
  titleItem: {
    fontWeight: '600',
  },
  priceItem: {
    marginLeft: 'auto',
    fontWeight: '500',
  },
  orderSendBox: {
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
  },
  orderSendWrap: {
    borderRadius: 20,
    backgroundColor: ColorsVariable.orange,
    width: 100,
  },
  orderSendTitle: {
    textAlign: 'center',
    padding: 6,
  },

  totalPrice: {
    fontSize: 30,
  },
});
