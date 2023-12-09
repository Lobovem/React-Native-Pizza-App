import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ImageProps, ImageSourcePropType } from 'react-native';
import iconNew from './img/icon-new.png';
import iconHeart from './img/icon-heart.png';
import iconCard from './img/icon-card.png';

type MockDataType = {
  title: string;
  description: string;
  isNew: boolean;
  sale: boolean;
  img: ImageSourcePropType;
  priceOld: string;
  priceNew: string;
};

const App = () => {
  const mockItemData: MockDataType[] = [
    {
      title: 'Pizza with meat ',
      description: 'Pizza with meat is really delision',
      isNew: true,
      sale: true,
      img: require('./img/pizza-1.jpg'),
      priceOld: '300 uah',
      priceNew: '250 uah',
    },

    {
      title: 'Pizza with cheese',
      description: 'Pizza with cheese is really delision',
      isNew: false,
      sale: false,
      img: require('./img/pizza-2.jpg'),
      priceOld: '250 uah',
      priceNew: '200 uah',
    },

    {
      title: 'Pizza with becon',
      description: 'Special proposal of pizza with becon',
      isNew: true,
      sale: true,
      img: require('./img/pizza-3.jpg'),
      priceOld: '320 uah',
      priceNew: '150 uah',
    },

    {
      title: 'Pizza with becon and cheese',
      description: 'Special proposal of pizza with becon and cheese',
      isNew: false,
      sale: true,
      img: require('./img/pizza-4.jpg'),
      priceOld: '400 uah',
      priceNew: '250 uah',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {mockItemData.map((item, index) => (
          <View key={index} style={styles.item}>
            <View>
              <Image style={styles.img} source={item.img} />
              {item.isNew && <Image style={styles.iconNew} source={iconNew}></Image>}
            </View>

            <View style={styles.wrapRight}>
              <View style={styles.wrapTitle}>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.iconHeart} source={iconHeart}></Image>
              </View>

              <View style={styles.wrapPrice}>
                <Text style={styles.priceNew}>{item.priceNew}</Text>
                {item.sale && <Text style={styles.priceOld}>{item.priceOld}</Text>}
              </View>

              <View style={styles.wrapDesc}>
                <Text numberOfLines={1} style={styles.desc}>
                  {item.description}
                </Text>

                <View style={styles.wrapCard}>
                  <Text style={styles.titleCard}>Buy</Text>
                  <Image style={styles.card} source={iconCard}></Image>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    backgroundColor: 'grey',
    flex: 1,
  },

  item: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    borderRadius: 20,
    minHeight: 100,
  },

  wrapRight: {
    // justifyContent: 'space-around',
    gap: 10,
    flex: 1,
  },

  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    flex: 1,
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 14,
  },

  iconNew: {
    position: 'absolute',
    maxHeight: 44,
    borderRadius: 6,
    left: -16,
    top: -8,
    resizeMode: 'contain',
  },

  iconHeart: {
    maxWidth: 40,
    maxHeight: 40,
  },

  wrapPrice: {
    flexDirection: 'row',
    gap: 20,
  },

  priceNew: {
    fontSize: 16,
    fontWeight: '800',
  },

  priceOld: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'red',
  },

  desc: {
    fontSize: 16,
    flex: 1,
  },

  wrapDesc: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
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

export default App;
