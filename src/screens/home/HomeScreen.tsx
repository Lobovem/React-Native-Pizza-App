import React, { FC, useCallback, useMemo, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import iconNew from './img/icon-new.png';
import iconCard from './img/icon-card.png';
import iconHeart from './img/icon-heart.png';

import { IMockData, mockItemData, newItems, newItem } from './components/MochData';
import ColorsVariable from '../../components/ColorsVariable';
import { Header } from './components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListType } from '../../navigation/HomeStackScreen';

import orderStore from '../../store/Orders';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

interface IItemProps {
  item: IMockData;
}

type HomeScreenNavigationPropType = NativeStackNavigationProp<
  RootStackParamListType,
  'Home'
>;

const HomeScreens: FC<{ navigation: HomeScreenNavigationPropType }> = ({
  navigation,
}) => {
  const [mockItemDatas, setMockItemData] = useState(mockItemData);
  const [refreshing, setRefreshing] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);
  const [textInput, setTextInput] = useState('');

  const filterData = useMemo(() => {
    return mockItemDatas.filter((item) => {
      const title = item.title.toLocaleLowerCase();
      const inputText = textInput.trim().toLocaleLowerCase();

      return title.includes(inputText);
    });
  }, [textInput, mockItemDatas]);

  const onRefresh = (): void => {
    setRefreshing(true);
    setTimeout(() => {
      setMockItemData([newItem, ...mockItemDatas]);
      // mockItemDatas.unshift(newItem);
      setRefreshing(false);
      setIsEndReached(false);
    }, 1000);
  };

  const addNewItem = (): void => {
    if (!isEndReached) {
      setMockItemData([...mockItemDatas, ...newItems]);
    }
    setIsEndReached(true);
  };

  // const handleModalPress = (event: GestureResponderEvent): void => {
  //   /*Функция handleModalPress проверяет, было ли нажатие на сам
  //   компонент TouchableWithoutFeedback, а не на его содержимое.
  //   Если event.target (элемент, на котором произошло событие) равен
  //   event.currentTarget (компонент TouchableWithoutFeedback), это
  //   означает, что нажатие произошло вне содержимого модального окна,
  //   и в этом случае вызывается setModalVisible(!modalVisible), что
  //   изменит видимость модального окна.*/
  //   if (event.target !== event.currentTarget) {
  //     return;
  //   }
  //   setModalVisible(!modalVisible);
  // };

  const addToOrder = (item: IMockData): void => {
    orderStore.setOrders(item);
  };

  const onPressItem = (id: string): void => {
    navigation.navigate('Pizza', { id, mockItemDatas });
  };

  const renderItem = useCallback(
    ({ item }: IItemProps) => {
      return (
        <View style={styles.container}>
          <View style={styles.item}>
            <View>
              <Pressable onPress={() => onPressItem(item.id)}>
                <Image style={styles.img} source={item.img} />
              </Pressable>
              {item.isNew && <Image style={styles.iconNew} source={iconNew}></Image>}
            </View>

            <View style={styles.wrapRight}>
              <View style={styles.wrapTitle}>
                <Pressable style={styles.titleBox} onPress={() => onPressItem(item.id)}>
                  <Text style={styles.title}>{item.title}</Text>
                </Pressable>

                <Image style={styles.iconHeart} source={iconHeart}></Image>
              </View>

              <View style={styles.wrapPrice}>
                <Text style={styles.priceNew}>{item.priceNew} UAH</Text>
                {item.sale && <Text style={styles.priceOld}>{item.priceOld} UAH</Text>}
              </View>

              <View style={styles.wrapDesc}>
                <Text numberOfLines={1} style={styles.desc}>
                  {item.description}
                </Text>

                <View style={styles.wrapCard}>
                  <Text style={styles.titleCard}>Buy</Text>
                  <Pressable onPress={() => addToOrder(item)}>
                    <Image style={styles.card} source={iconCard}></Image>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    },
    [mockItemDatas, textInput]
  );

  const offsetY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((e) => {
    offsetY.value = e.contentOffset.y;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      //interpolate are watching to change. first arr is range offsetY, second arr is range  value of opacity
      opacity: interpolate(offsetY.value, [0, 200], [1, 0]),
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header
        setTextInput={setTextInput}
        textInput={textInput}
        animatedStyle={animatedStyle}
      />
      {/* <Animated.Text style={animatedStyle}>TEXT</Animated.Text> */}

      <Animated.FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.2}
        onEndReached={addNewItem}
        onScroll={scrollHandler}
      />
    </SafeAreaView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsVariable.greyLight,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },

  item: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: ColorsVariable.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    borderRadius: 20,
    minHeight: 100,
    shadowColor: ColorsVariable.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  wrapRight: {
    gap: 10,
    flex: 1,
  },

  wrapTitle: {
    flexDirection: 'row',
    // alignItems: 'flex-end',
  },

  titleBox: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    color: ColorsVariable.black,
    fontWeight: '500',
    flex: 1,
    flexWrap: 'wrap',
  },

  img: {
    width: 100,
    height: 90,
    borderRadius: 14,
    resizeMode: 'stretch',
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
    marginLeft: 'auto',
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
    color: ColorsVariable.red,
  },

  desc: {
    fontSize: 16,
    flex: 1,
  },

  wrapDesc: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
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
  // modalOverlay: {
  //   flex: 1,
  //   backgroundColor: 'rgba(0, 0, 0, 0.3)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // modalContent: {
  //   backgroundColor: ColorsVariable.white,
  //   borderRadius: 30,
  //   padding: 20,
  //   justifyContent: 'center',
  //   height: 800,
  // },
});
