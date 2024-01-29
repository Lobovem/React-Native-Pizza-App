import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BasketScreen: FC = () => {
  return (
    <SafeAreaView style={styles.wrap}>
      <Text style={styles.title}>Cart</Text>
      <View>
        <Image style={styles.iconCart} source={require('../home/img/icon-cart.png')} />
      </View>
      <View style={styles.wrapPrice}>
        <Text style={styles.totalPrice}>Total:</Text>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  title: {
    fontSize: 40,
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
  totalPrice: {
    fontSize: 30,
  },
});
