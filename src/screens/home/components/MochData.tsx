import { ImageSourcePropType } from 'react-native';

export type MockDataType = {
  id: string;
  title: string;
  description: string;
  isNew: boolean;
  sale: boolean;
  img: ImageSourcePropType;
  priceOld: string;
  priceNew: string;
};

export const mockItemData: MockDataType[] = [
  {
    id: '1',
    title: 'Pizza with meat',
    description: 'Pizza with meat is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.jpg'),
    priceOld: '300 UAH',
    priceNew: '250 UAH',
  },

  {
    id: '2',
    title: 'Pizza with cheese',
    description: 'Pizza with cheese is really delision',
    isNew: false,
    sale: false,
    img: require('../img/pizza-2.jpg'),
    priceOld: '250 UAH',
    priceNew: '200 UAH',
  },

  {
    id: '3',
    title: 'Pizza with becon',
    description: 'Special proposal of pizza with becon',
    isNew: false,
    sale: true,
    img: require('../img/pizza-3.jpg'),
    priceOld: '320 UAH',
    priceNew: '150 UAH',
  },

  {
    id: '4',
    title: 'Pizza with becon and cheese',
    description: 'Special proposal of pizza with becon and cheese',
    isNew: true,
    sale: true,
    img: require('../img/pizza-4.jpg'),
    priceOld: '400 UAH',
    priceNew: '250 UAH',
  },

  {
    id: '5',
    title: 'Pizza with meat ',
    description: 'Pizza with meat is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.jpg'),
    priceOld: '300 UAH',
    priceNew: '250 UAH',
  },

  {
    id: '6',
    title: 'Pizza with cheese',
    description: 'Pizza with cheese is really delision',
    isNew: false,
    sale: false,
    img: require('../img/pizza-2.jpg'),
    priceOld: '250 UAH',
    priceNew: '200 UAH',
  },

  {
    id: '7',
    title: 'Pizza with becon',
    description: 'Special proposal of pizza with becon',
    isNew: false,
    sale: true,
    img: require('../img/pizza-3.jpg'),
    priceOld: '320 UAH',
    priceNew: '150 UAH',
  },

  {
    id: '8',
    title: 'Pizza with becon and cheese',
    description: 'Special proposal of pizza with becon and cheese',
    isNew: true,
    sale: true,
    img: require('../img/pizza-4.jpg'),
    priceOld: '400 UAH',
    priceNew: '250 UAH',
  },
];

export type mockDataImgType = {
  id: string;
  img: ImageSourcePropType;
};

export const mockDataImg: mockDataImgType[] = [
  { id: '0', img: require('../img/banner-1-burger.jpg') },
  { id: '1', img: require('../img/banner-2-pizzaBase.jpg') },
  { id: '2', img: require('../img/banner-3-pizzaCheese.jpg') },
];
