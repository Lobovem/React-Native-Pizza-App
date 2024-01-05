import React, { FC, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  Modal,
  GestureResponderEvent,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import iconNew from '../img/icon-new.png';
import iconHeart from '../img/icon-heart.png';
import iconCard from '../img/icon-card.png';
import iconSearch from '../img/icon-search.png';
import {
  MockDataType,
  mockDataImgType,
  mockDataImg,
  mockItemData,
} from '../components/MochData';
import { CustomTouchable } from '../../../components/CustomTouchable';
import ColorsVariable from '../../../components/Colors';
import { StatusBar } from 'expo-status-bar';

interface ItemProps {
  item: MockDataType;
}

interface ItemImgProps {
  item: mockDataImgType;
}

const Item: FC<ItemProps> = ({ item }) => (
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
);

const windowDimensions = Dimensions.get('window');

const ItemImg: FC<ItemImgProps> = ({ item }) => {
  return (
    <Image
      style={{
        height: windowDimensions.height,
        width: windowDimensions.width,
      }}
      source={item.img}
    />
  );
};

const renderItem = ({ item }: ItemProps) => {
  return <Item item={item} />;
};

const renderImgItem = ({ item }: ItemImgProps) => {
  return <ItemImg item={item} />;
};

const HomeScreens: FC = () => {
  const [textInput, setTextInput] = useState('');
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const changedInputText = (value: string): void => {
    setTextInput(value);
  };

  const handleModalPress = (event: GestureResponderEvent): void => {
    /*Функция handleModalPress проверяет, было ли нажатие на сам 
    компонент TouchableWithoutFeedback, а не на его содержимое. 
    Если event.target (элемент, на котором произошло событие) равен 
    event.currentTarget (компонент TouchableWithoutFeedback), это 
    означает, что нажатие произошло вне содержимого модального окна, 
    и в этом случае вызывается setModalVisible(!modalVisible), что 
    изменит видимость модального окна.*/
    if (event.target !== event.currentTarget) {
      return;
    }
    setModalVisible(!modalVisible);
  };

  const handleCloseModal = (): void => {
    setModalVisible(!modalVisible);
    setIconSlider(0);
  };

  const search = (mockItemData: MockDataType[], textInput: string): MockDataType[] => {
    return mockItemData.filter((item) => {
      const title = item.title.toLocaleLowerCase();
      const inputText = textInput.trim().toLocaleLowerCase();

      return title.includes(inputText);
    });
  };

  const [iconSlider, setIconSlider] = useState(0);

  const eventSlider = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const slider = Math.round(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );

    setIconSlider(slider);
  };

  const ItemSliderDots: FC<ItemImgProps> = ({ item }) => {
    return (
      <View style={item.id === iconSlider.toString() ? styles.dotsActive : styles.dots} />
    );
  };

  const renderSliderDots = ({ item }: ItemImgProps) => {
    return <ItemSliderDots item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWrap}>
        {isActiveSearch && (
          <TextInput
            keyboardType="default"
            style={styles.textInput}
            placeholder="Search here"
            onChangeText={changedInputText}
            value={textInput}
          />
        )}

        <View style={styles.searchIconWrap}>
          <CustomTouchable
            withoutFeedback={true}
            onPress={() => setIsActiveSearch(!isActiveSearch)}
          >
            <Image style={styles.searchIcon} source={iconSearch}></Image>
          </CustomTouchable>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            {/* <TouchableWithoutFeedback
              onPress={handleModalPress}
              style={styles.modalOverlay}
            > */}
            {/* <View style={styles.modalOverlay}>
                <View style={styles.modalContent}> */}

            <FlatList
              style={styles.wrapBanner}
              data={mockDataImg}
              renderItem={renderImgItem}
              keyExtractor={(item) => item.id}
              horizontal
              pagingEnabled
              onScroll={eventSlider}
              showsHorizontalScrollIndicator={false}
            />
            <StatusBar style="light" />

            <View style={styles.wrapDots}>
              <FlatList
                data={mockDataImg}
                renderItem={renderSliderDots}
                keyExtractor={(item) => item.id}
                horizontal
              />
            </View>

            <CustomTouchable
              withoutFeedback={true}
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.customWrapper}
            >
              <Image
                style={styles.modalIconClose}
                source={require('../img/icon-close.png')}
              />
            </CustomTouchable>
            {/* </View>
              </View> */}
            {/* </TouchableWithoutFeedback> */}
            {/* <Image source={require('../img/')}></Image> */}
          </Modal>
          <CustomTouchable withoutFeedback={true} onPress={handleCloseModal}>
            <Image style={styles.searchHeart} source={iconHeart}></Image>
          </CustomTouchable>
        </View>
      </View>
      <FlatList
        data={search(mockItemData, textInput)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsVariable.greyLight,
    flex: 1,
  },

  searchWrap: {
    flexDirection: 'row',
    margin: 10,
  },

  searchIconWrap: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: 20,
    marginEnd: 10,
    marginBottom: 10,
  },

  searchIcon: {
    width: 30,
    height: 30,
  },

  searchHeart: {
    width: 30,
    height: 30,
  },

  textInput: {
    height: 40,
    width: 280,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
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

  modalIconClose: {
    position: 'absolute',
    right: 30,
    top: 60,
    width: 30,
    height: 30,
    borderRadius: 10,
  },

  customWrapper: {
    // borderRadius: 120,
  },

  wrapBanner: {},
  wrapDots: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  dots: {
    width: 20,
    height: 20,
    margin: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  dotsActive: {
    width: 20,
    height: 20,
    margin: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 10,
  },
});

export default HomeScreens;
