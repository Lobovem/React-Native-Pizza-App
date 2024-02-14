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
import iconCart from './img/icon-cart.png';
import iconHeart from './img/icon-heartCart.png';

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

            <View style={styles.wrapTitle}>
              <Pressable onPress={() => onPressItem(item.id)}>
                <Text style={styles.title}>{item.title}</Text>
              </Pressable>
            </View>

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
              <Image style={styles.iconHeart} source={iconHeart}></Image>
              <Pressable onPress={() => addToOrder(item)}>
                <Image style={styles.card} source={iconCart}></Image>
              </Pressable>
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
    <SafeAreaView style={styles.mainContainer}>
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
        numColumns={2}
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
  mainContainer: {
    backgroundColor: ColorsVariable.white,
  },
  container: {
    backgroundColor: ColorsVariable.white,
    paddingLeft: 20,
    flex: 1,
    paddingRight: 20,
    paddingTop: 50,
  },

  item: {
    marginTop: 10,
    marginBottom: 50,
    padding: 10,
    paddingBottom: 20,
    flexDirection: 'column',
    backgroundColor: ColorsVariable.white,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    gap: 6,
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

  // wrapRight: {
  //   gap: 10,
  //   flex: 1,
  // },
  img: {
    width: 150,
    height: 150,
    top: -50,
    // resizeMode: 'stretch',
  },

  iconNew: {
    position: 'absolute',
    maxHeight: 44,
    borderRadius: 6,
    right: -16,
    top: -48,
    resizeMode: 'contain',
  },

  wrapTitle: {
    top: -40,
    // marginBottom: 'auto',
    // flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  title: {
    fontSize: 18,
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

    color: ColorsVariable.red,
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
