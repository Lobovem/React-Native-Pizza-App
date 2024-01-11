import { useNavigation, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MockDataType } from './components/MochData';

import iconCard from './img/icon-card.png';
import iconHeart from './img/icon-heart.png';
import ColorsVariable from '../../components/Colors';

export const PizzaScreen: FC = () => {
  const route = useRoute();
  const item = route.params;
  // console.log(item);

  // const filterItem = (mockItemDatas: MockDataType, id: string) => {
  //   // mockItemDatas.filter((item) => {});
  // };

  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.imgWrap}>
        <Image style={styles.img} source={item.img}></Image>
      </View>

      <View style={styles.wrapTitle}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.iconHeart} source={iconHeart}></Image>
      </View>
      <Text style={styles.desc}>{item.description}</Text>

      <View style={styles.buyWrap}>
        <View>
          <Text>Price:</Text>
          <View style={styles.wrapPrice}>
            <Text style={styles.priceNew}>{item.priceNew}</Text>
            {item.sale && <Text style={styles.priceOld}>{item.priceOld}</Text>}
          </View>
        </View>

        <View style={styles.wrapCard}>
          <Text style={styles.titleCard}>Buy</Text>
          <Image style={styles.card} source={iconCard}></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    gap: 40,
    // alignItems: 'center',
    marginHorizontal: 20,
  },
  imgWrap: {
    alignItems: 'center',

    // flex: 1,
    // width: windowDimensions.width,
    // height: 300,
  },
  img: {
    width: 400,
    height: 300,
    borderRadius: 20,
  },
  wrapTitle: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'baseline',
    // justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  iconHeart: {
    marginLeft: 'auto',
    width: 34,
    height: 34,
  },
  desc: {
    fontSize: 16,
  },

  buyWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceNew: {
    fontSize: 16,
    fontWeight: '800',
  },

  priceOld: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: ColorsVariable.red,
  },
  wrapCard: {
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
