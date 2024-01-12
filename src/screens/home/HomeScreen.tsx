import React, { FC, useCallback, useState } from 'react';
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

import {
  IMockDataType,
  mockItemData,
  newItems,
  newItem,
} from './components/MochData';
import ColorsVariable from '../../components/Colors';
import { Header } from './components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigations';

interface IItemProps {
  item: IMockDataType;
}

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const HomeScreens: FC<{ navigation: HomeScreenNavigationProp }> = ({
  navigation,
}) => {
  const [mockItemDatas, setMockItemData] = useState(mockItemData);
  const [refreshing, setRefreshing] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);
  const [textInput, setTextInput] = useState('');
  // const navigation = useNavigation<ProfileScreenNavigationProp>(); //TODO check out type to navigation

  // const route = useRoute();
  // console.log(route.params);

  const onRefresh = useCallback((): void => {
    setRefreshing(true);
    setTimeout(() => {
      setMockItemData([newItem, ...mockItemDatas]);
      // mockItemDatas.unshift(newItem);
      setRefreshing(false);
      setIsEndReached(false);
    }, 1000);
  }, []);

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

  const search = (
    mockItemData: IMockDataType[],
    textInput: string
  ): IMockDataType[] => {
    return mockItemData.filter((item) => {
      const title = item.title.toLocaleLowerCase();
      const inputText = textInput.trim().toLocaleLowerCase();

      return title.includes(inputText);
    });
  };

  const renderItem = ({ item }: IItemProps) => {
    return (
      <Pressable onPress={() => onPressItem(item.id)}>
        <View style={styles.container}>
          <View style={styles.item}>
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
        </View>
      </Pressable>
    );
  };

  const onPressItem = (id: string): void => {
    navigation.navigate('Pizza', { id, mockItemDatas });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header setTextInput={setTextInput} textInput={textInput} />

      <Pressable onPress={() => navigation.navigate('Modal')}>
        <Image source={iconHeart}></Image>
      </Pressable>

      <FlatList
        data={search(mockItemDatas, textInput)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.2}
        onEndReached={addNewItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsVariable.greyLight,
    flex: 1,
  },

  item: {
    margin: 10,
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
    alignItems: 'flex-end',
  },

  title: {
    fontSize: 20,
    color: ColorsVariable.black,
    fontWeight: '500',
    flex: 1,
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
