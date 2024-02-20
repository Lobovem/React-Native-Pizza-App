import React, { FC, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import orderStore from '../../store/Orders';
import { observer } from 'mobx-react';
import { IMockData } from '../home/components/MochData';
import { generateUniqueKey } from '../../common/generateUniqueKey';
import ColorsVariable from '../../components/ColorsVariable';

const WishList: FC = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);

  const cleanWishList = (): void => {
    orderStore.removeItemFromWishList([]);
    setIsSuccessful(true);

    setTimeout(() => {
      setIsSuccessful(false);
    }, 3000);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {orderStore.wishList[0] ? (
        orderStore.wishList.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={item.img} style={styles.itemImg} />

            <View style={styles.wrapItemInfo}>
              <View style={styles.wrapTitle}>
                <Text style={styles.itemTitle}>{item.title}</Text>

                <Pressable
                  style={styles.itemRemove}
                  onPress={() => orderStore.removeItemFromWishList(item)}
                >
                  <Text style={styles.itemRemoveTitle}>X</Text>
                </Pressable>
              </View>

              <Text style={styles.itemPrice}>{item.priceNew} $</Text>

              <View style={styles.optionsWrap}>
                {item.options.map(
                  (item, index) =>
                    item.active && (
                      <Text key={index} style={styles.optionItem}>
                        size: {item.name}
                      </Text>
                    )
                )}
              </View>
            </View>
          </View>
        ))
      ) : isSuccessful ? (
        <View style={styles.orderSuccessful}>
          <Image
            style={styles.imgSuccessful}
            source={require('../home/img/orderSucceseful.png')}
          />

          <View style={styles.wrapFavoriteTitle}>
            <Text style={styles.favoriteTitle}>Favorite list was clean</Text>
          </View>
        </View>
      ) : (
        <View style={styles.orderSuccessful}>
          <View style={styles.wrapFavoriteTitle}>
            <Text style={styles.favoriteTitle}>Your favorite list is empty</Text>
          </View>
        </View>
      )}

      {orderStore.wishList[0] && (
        <View>
          <Pressable onPress={cleanWishList} style={styles.btnOrderSendWrap}>
            <Text style={styles.btnOrderSendTitle}>Clean all favorite list</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
};
//TODO will clean code from dont use code

export default observer(WishList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsVariable.white,
    paddingTop: 20,
    paddingBottom: 160,
    paddingHorizontal: 20,
  },
  item: {
    marginBottom: 20,
    padding: 14,
    backgroundColor: ColorsVariable.white,
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

  itemImg: {
    width: 100,
    height: 100,
    // top: -50,
  },

  wrapItemInfo: {
    flex: 1,
    gap: 6,
  },

  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  itemTitle: {
    fontSize: 18,
    color: ColorsVariable.black,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    flex: 1,
    // flexWrap: 'wrap',
  },

  itemRemove: {
    backgroundColor: ColorsVariable.orange,
    borderRadius: 30,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemRemoveTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  itemPrice: {
    fontSize: 20,
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

  favoriteTitle: {
    fontSize: 30,
    marginBottom: 30,
  },

  wrapFavoriteTitle: {
    marginTop: 20,
    alignItems: 'center',
  },

  btnOrderSendWrap: {
    borderRadius: 20,
    backgroundColor: ColorsVariable.orange,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },

  btnOrderSendTitle: {
    textAlign: 'center',
    fontWeight: '600',
    padding: 6,
    fontSize: 20,
    color: ColorsVariable.white,
  },

  emptyCart: {
    marginTop: 150,
  },

  imgCartEmpty: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    marginRight: 50,
    resizeMode: 'contain',
  },

  orderSuccessful: {
    marginTop: 150,
  },

  imgSuccessful: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 50,
  },
});
