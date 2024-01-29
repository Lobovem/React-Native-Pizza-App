import React, { FC } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import orderStore from '../../store/Orders';
import { observer } from 'mobx-react';
import { IMockData } from './components/MochData';

const BasketScreen: FC = () => {
  const calcSumOrders = orderStore.orders.reduce((acc, item) => item.priceNew + acc, 0);

  const removeItemFromOrder = (item: IMockData): void => {
    let orders = orderStore.orders.filter((order) => order.id !== item.id);
    orderStore.removeOrders(orders);
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <Text style={styles.title}>Cart</Text>

      <View>
        {orderStore.orders[0] ? (
          orderStore.orders.map((item) => (
            <View key={item.id} style={styles.wrapItems}>
              <Text style={styles.titleItem}>{item.title}</Text>
              <Text style={styles.priceItem}>{item.priceNew}</Text>
              <Button title="delete" onPress={() => removeItemFromOrder(item)}></Button>
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
    </SafeAreaView>
  );
};

export default observer(BasketScreen);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'space-between',
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
  },
  iconCart: {
    alignSelf: 'center',
    // justifyContent: 'center',
    width: 250,
    height: 250,
  },
  wrapPrice: {
    alignItems: 'flex-start',
  },
  titleItem: {
    fontWeight: '600',
  },
  priceItem: {
    marginLeft: 'auto',
    fontWeight: '500',
  },

  totalPrice: {
    fontSize: 30,
  },
});
