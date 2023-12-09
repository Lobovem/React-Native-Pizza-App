import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ImageProps } from 'react-native';
import Pizza1 from './img/pizza-1.jpg';
import Pizza2 from './img/pizza-2.jpg';
import iconNew from './img/icon-new.png';
import iconHeart from './img/icon-heart.png';
import iconCard from './img/icon-card.png';

const App = () => {
  const mockItemData = [
    {
      title: 'Pizza with meat',
      description: 'Pizza with meat is really delision',
      isNew: true,
      sale: true,
      image: './img/pizza-1.jpg',
      priceOld: '300 uah',
      priceNew: '250 uah',
    },
    {
      title: 'Pizza with cheese',
      description: 'Pizza with cheese is really delision',
      isNew: false,
      sale: false,
      image: './img/pizza-2.jpg',
      priceOld: '250 uah',
      priceNew: '200 uah',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {mockItemData.map((item) => (
          <View style={styles.item}>
            <View>
              <Image style={styles.img} source={item.image} />
              {item.isNew && <Image style={styles.imgIcon} source={iconNew}></Image>}
            </View>

            <View style={styles.wrapRight}>
              <View style={styles.heart}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={iconHeart}></Image>
              </View>

              <View style={styles.wrapPrice}>
                <Text style={styles.priceNew}>{item.priceNew}</Text>
                {item.sale && <Text style={styles.priceOld}>{item.priceOld}</Text>}
              </View>

              <View style={styles.wrapDesc}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.desc}>
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
    // margin: 10,

    // justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: 'grey',
    flex: 1,
    // width: '100%',
  },

  item: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    // justifyContent:"space-between",
    gap: 20,
    borderRadius: 20,
    minHeight: 150,
  },

  wrapRight: {
    // flexDirection: 'column',
  },

  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 14,
  },

  imgIcon: {
    position: 'absolute',
    // width: 60,
    // maxHeight: 30,
    borderRadius: 6,
    right: -16,
    top: -16,
    // resizeMode: 'contain',
  },

  heart: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
  },

  desc: {
    fontSize: 16,
    maxWidth: 150,
  },

  wrapDesc: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    // justifyContent: 'space-between',
  },

  wrapCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleCard: {
    fontSize: 16,
  },

  card: {
    maxWidth: 40,
    maxHeight: 40,
  },
});

export default App;
