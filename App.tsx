import React, { useState } from 'react'; //?????
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ImageSourcePropType,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import iconNew from './img/icon-new.png';
import iconHeart from './img/icon-heart.png';
import iconCard from './img/icon-card.png';

// type ItemProps = { title: string };

// const Item = ({ title }: ItemProps) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

type MockDataType = {
  id: string;
  title: string;
  description: string;
  isNew: boolean;
  sale: boolean;
  img: ImageSourcePropType;
  priceOld: string;
  priceNew: string;
};

const App = () => {
  const [textInput, setTextInput] = useState('');
  // const SearchInput = (): React.JSX.Element => {
  // const changeInputText = (value: string): void => {
  //   setTextInput(value);
  // };

  //   return (

  //   );
  // };

  let mockItemData: MockDataType[] = [
    {
      id: '1',
      title: 'Pizza with meat',
      description: 'Pizza with meat is really delision',
      isNew: true,
      sale: true,
      img: require('./img/pizza-1.jpg'),
      priceOld: '300 UAH',
      priceNew: '250 UAH',
    },

    {
      id: '2',
      title: 'Pizza with cheese',
      description: 'Pizza with cheese is really delision',
      isNew: false,
      sale: false,
      img: require('./img/pizza-2.jpg'),
      priceOld: '250 UAH',
      priceNew: '200 UAH',
    },

    {
      id: '3',
      title: 'Pizza with becon',
      description: 'Special proposal of pizza with becon',
      isNew: false,
      sale: true,
      img: require('./img/pizza-3.jpg'),
      priceOld: '320 UAH',
      priceNew: '150 UAH',
    },

    {
      id: '4',
      title: 'Pizza with becon and cheese',
      description: 'Special proposal of pizza with becon and cheese',
      isNew: true,
      sale: true,
      img: require('./img/pizza-4.jpg'),
      priceOld: '400 UAH',
      priceNew: '250 UAH',
    },

    {
      id: '5',
      title: 'Pizza with meat ',
      description: 'Pizza with meat is really delision',
      isNew: true,
      sale: true,
      img: require('./img/pizza-1.jpg'),
      priceOld: '300 UAH',
      priceNew: '250 UAH',
    },

    {
      id: '6',
      title: 'Pizza with cheese',
      description: 'Pizza with cheese is really delision',
      isNew: false,
      sale: false,
      img: require('./img/pizza-2.jpg'),
      priceOld: '250 UAH',
      priceNew: '200 UAH',
    },

    {
      id: '7',
      title: 'Pizza with becon',
      description: 'Special proposal of pizza with becon',
      isNew: false,
      sale: true,
      img: require('./img/pizza-3.jpg'),
      priceOld: '320 UAH',
      priceNew: '150 UAH',
    },

    {
      id: '8',
      title: 'Pizza with becon and cheese',
      description: 'Special proposal of pizza with becon and cheese',
      isNew: true,
      sale: true,
      img: require('./img/pizza-4.jpg'),
      priceOld: '400 UAH',
      priceNew: '250 UAH',
    },
  ];

  const search = (mockItemData: MockDataType[], textInput: string): MockDataType[] => {
    return mockItemData.filter((item) => {
      const title = item.title.toLocaleLowerCase();
      const inputText = textInput.trim().toLocaleLowerCase();

      return title.includes(inputText);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search here"
        onChangeText={setTextInput}
        value={textInput}
      ></TextInput>
      <FlatList
        data={search(mockItemData, textInput)}
        renderItem={({ item }) => (
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
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <ScrollView>
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
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    backgroundColor: '#F1F1F1',
    flex: 1,
  },

  textInput: {
    // flex: 1,
    height: 40,
    maxWidth: 300,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    padding: 10,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
