import { ImageSourcePropType } from 'react-native';

export interface IMockData {
  id: string;
  title: string;
  description: string;
  isNew: boolean;
  sale: boolean;
  img: ImageSourcePropType;
  priceOld: number;
  priceNew: number;
}

export interface IMockDataImg {
  id: string;
  img: ImageSourcePropType;
  link: string;
}

export const mockItemData: IMockData[] = [
  {
    id: '1',
    title: 'Pizza «Маргарита»',
    description:
      '«Маргарита» считается неаполитанской пиццей. Само слово переводится как морской или моряцкий. Однако это не значит, что пицца должна быть с морепродуктами. Возможно, пиццу так назвали в честь рыбаков, которые употребляли ее практически каждое утро.',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.jpg'),
    priceOld: 300,
    priceNew: 250,
  },

  {
    id: '2',
    title: 'Pizza «Четыре сезона»',
    description:
      '«Четыре сезона» — одна из самых популярных и является лидером продаж. Имеется множество вариантов сочетаний начинок. В традиционной «Четыре сезона» три сектора (сезона) начинки заняты морепродуктами, а один грибами. Состав: тесто, моцареллла, помидоры, соленые грибы, варено-мороженные мидии, свежие или мороженные в панцире креветки, маслины, соленый анчоус, петрушка, чеснок, апельсин, соль, сахар, перец, вустерширский соус, соус табаско, свежий базилик, пармезан.',
    isNew: false,
    sale: false,
    img: require('../img/pizza-2.jpg'),
    priceOld: 250,
    priceNew: 200,
  },

  {
    id: '3',
    title: 'Pizza «Маринара»',
    description:
      '«Маринара» считается неаполитанской пиццей. Само слово переводится как морской или моряцкий. Однако это не значит, что пицца должна быть с морепродуктами. Возможно, пиццу так назвали в честь рыбаков, которые употребляли ее практически каждое утро.',
    isNew: false,
    sale: true,
    img: require('../img/pizza-3.jpg'),
    priceOld: 320,
    priceNew: 150,
  },

  {
    id: '4',
    title: 'Pizza with becon and cheese',
    description: 'Special proposal of pizza with becon and cheese',
    isNew: true,
    sale: true,
    img: require('../img/pizza-4.jpg'),
    priceOld: 400,
    priceNew: 250,
  },

  {
    id: '5',
    title: 'Pizza with meat ',
    description: 'Pizza with meat is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.jpg'),
    priceOld: 300,
    priceNew: 250,
  },

  {
    id: '6',
    title: 'Pizza with cheese',
    description: 'Pizza with cheese is really delision',
    isNew: false,
    sale: false,
    img: require('../img/pizza-2.jpg'),
    priceOld: 250,
    priceNew: 200,
  },

  {
    id: '7',
    title: 'Pizza with becon',
    description: 'Special proposal of pizza with becon',
    isNew: false,
    sale: true,
    img: require('../img/pizza-3.jpg'),
    priceOld: 320,
    priceNew: 150,
  },

  {
    id: '8',
    title: 'Pizza with becon and cheese',
    description: 'Special proposal of pizza with becon and cheese',
    isNew: true,
    sale: true,
    img: require('../img/pizza-4.jpg'),
    priceOld: 400,
    priceNew: 250,
  },
];

export const newItems: IMockData[] = [
  {
    id: '9',
    title: 'New pizza 2',
    description: 'Pizza is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.jpg'),
    priceOld: 450,
    priceNew: 100,
  },
  {
    id: '10',
    title: 'New pizza 3',
    description: 'Pizza is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.jpg'),
    priceOld: 450,
    priceNew: 100,
  },
  {
    id: '11',
    title: 'New pizza 4',
    description: 'Pizza is really delision',
    isNew: true,
    sale: true,
    img: require('../img/pizza-1.jpg'),
    priceOld: 450,
    priceNew: 100,
  },
];

export const newItem: IMockData = {
  id: '0',
  title: 'New pizza',
  description: 'Pizza is really delision',
  isNew: true,
  sale: true,
  img: require('../img/pizza-1.jpg'),
  priceOld: 450,
  priceNew: 100,
};

export const mockDataImg: IMockDataImg[] = [
  {
    id: '0',
    img: require('../img/banner-1-burger.jpg'),
    link: 'http://google.com.ua',
  },
  {
    id: '1',
    img: require('../img/banner-2-pizzaBase.jpg'),
    link: 'http://google.com.ua',
  },
  {
    id: '2',
    img: require('../img/banner-3-pizzaCheese.jpg'),
    link: 'http://google.com.ua',
  },
];
