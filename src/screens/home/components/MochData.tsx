import { ImageSourcePropType } from 'react-native';
import { generateUniqueKey } from '../../../common/generateUniqueKey';

export interface IMockData {
  id: string;
  title: string;
  description: string;
  isNew: boolean;
  sale: boolean;
  img: ImageSourcePropType;
  priceOld: number;
  priceNew: number;
  quantity: number;
  options?: { name: string; active: boolean }[];
}

export interface IMockDataImg {
  id: string;
  img: ImageSourcePropType;
  link: string;
}

export const mockItemData: IMockData[] = [
  {
    id: generateUniqueKey(),
    title: 'Meat',
    description:
      '«Маргарита» считается неаполитанской пиццей. Само слово переводится как морской или моряцкий. Однако это не значит, что пицца должна быть с морепродуктами. Возможно, пиццу так назвали в честь рыбаков, которые употребляли ее практически каждое утро.',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.png'),
    priceOld: 30,
    priceNew: 25,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },

  {
    id: generateUniqueKey(),
    title: 'Four season',
    description:
      '«Четыре сезона» — одна из самых популярных и является лидером продаж. Имеется множество вариантов сочетаний начинок. В традиционной «Четыре сезона» три сектора (сезона) начинки заняты морепродуктами, а один грибами. Состав: тесто, моцареллла, помидоры, соленые грибы, варено-мороженные мидии, свежие или мороженные в панцире креветки, маслины, соленый анчоус, петрушка, чеснок, апельсин, соль, сахар, перец, вустерширский соус, соус табаско, свежий базилик, пармезан.',
    isNew: false,
    sale: false,
    img: require('../img/pizza-1.png'),
    priceOld: 25,
    priceNew: 20,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },

  {
    id: generateUniqueKey(),
    title: 'Marinara',
    description:
      '«Маринара» считается неаполитанской пиццей. Само слово переводится как морской или моряцкий. Однако это не значит, что пицца должна быть с морепродуктами. Возможно, пиццу так назвали в честь рыбаков, которые употребляли ее практически каждое утро.',
    isNew: false,
    sale: true,
    img: require('../img/pizza-1.png'),
    priceOld: 32,
    priceNew: 15,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },

  {
    id: generateUniqueKey(),
    title: 'Becon and cheese',
    description: 'Special proposal of pizza with becon and cheese',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.png'),
    priceOld: 40,
    priceNew: 25,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },

  {
    id: generateUniqueKey(),
    title: 'Meat ',
    description: 'Pizza with meat is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.png'),
    priceOld: 30,
    priceNew: 25,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },

  {
    id: generateUniqueKey(),
    title: 'Cheese',
    description: 'Pizza with cheese is really delision',
    isNew: false,
    sale: false,
    img: require('../img/pizza-1.png'),
    priceOld: 25,
    priceNew: 20,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },

  {
    id: generateUniqueKey(),
    title: 'Becon',
    description: 'Special proposal of pizza with becon',
    isNew: false,
    sale: true,
    img: require('../img/pizza-1.png'),
    priceOld: 32,
    priceNew: 15,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },

  {
    id: generateUniqueKey(),
    title: 'Becon and cheese',
    description: 'Special proposal of pizza with becon and cheese',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.png'),
    priceOld: 40,
    priceNew: 25,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },
];

export const newItems: IMockData[] = [
  {
    id: generateUniqueKey(),
    title: 'New pizza 2',
    description: 'Pizza is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.png'),
    priceOld: 45,
    priceNew: 10,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },
  {
    id: generateUniqueKey(),
    title: 'New pizza 3',
    description: 'Pizza is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.png'),
    priceOld: 45,
    priceNew: 10,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },
  {
    id: generateUniqueKey(),
    title: 'New pizza 4',
    description: 'Pizza is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.png'),
    priceOld: 45,
    priceNew: 10,
    quantity: 1,
    options: [
      { name: 'S', active: false },
      { name: 'M', active: true },
      { name: 'L', active: false },
    ],
  },
];

export const newItem: IMockData = {
  id: generateUniqueKey(),
  title: 'New pizza',
  description: 'Pizza is really delision',
  isNew: true,
  sale: true,
  img: require('../img/pizza-1.png'),
  priceOld: 45,
  priceNew: 10,
  quantity: 1,
  options: [
    { name: 'S', active: false },
    { name: 'M', active: true },
    { name: 'L', active: false },
  ],
};

export const mockDataImg: IMockDataImg[] = [
  {
    id: generateUniqueKey(),
    img: require('../img/banner-1-burger.jpg'),
    link: 'http://google.com.ua',
  },
  {
    id: generateUniqueKey(),
    img: require('../img/banner-2-pizzaBase.jpg'),
    link: 'http://google.com.ua',
  },
  {
    id: generateUniqueKey(),
    img: require('../img/banner-3-pizzaCheese.jpg'),
    link: 'http://google.com.ua',
  },
];
