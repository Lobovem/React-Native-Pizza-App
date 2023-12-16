import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';
import iconNew from './src/screens/home/img/icon-new.png';
import iconHeart from './src/screens/home/img/icon-heart.png';
import iconCard from './src/screens/home/img/icon-card.png';
import iconSearch from './src/screens/home/img/icon-search.png';
import { CustomTouchable } from './src/components/CustomTouchable';
import { MockDataType, mockItemData } from './src/screens/home/components/MochData';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppStateHook from './UseAppState';

type ItemProps = {
  item: MockDataType;
};

const Item: React.FC<ItemProps> = ({ item }) => (
  // const Item = ({ item }: ItemProps) => (
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

const renderItem = ({ item }: { item: MockDataType }) => {
  return <Item item={item} />;
};

const App = () => {
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

  const search = (mockItemData: MockDataType[], textInput: string): MockDataType[] => {
    return mockItemData.filter((item) => {
      const title = item.title.toLocaleLowerCase();
      const inputText = textInput.trim().toLocaleLowerCase();

      return title.includes(inputText);
    });
  };

  return <AppStateHook />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.greyLight,
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
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 10,
  },

  item: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    borderRadius: 20,
    minHeight: 100,
    shadowColor: Colors.black,
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
    color: Colors.black,
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
    color: Colors.red,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: Colors.white,
    borderRadius: 30,
    padding: 40,
    justifyContent: 'center',
    height: 200,
  },

  modalCloseText: {
    color: Colors.black,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
