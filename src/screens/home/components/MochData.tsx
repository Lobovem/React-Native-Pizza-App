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
    title: 'Margherita Pizza',
    description:
      'Margherita Pizza: Classic and simple, the Margherita pizza features a perfect balance of tangy tomato sauce, creamy mozzarella cheese, and fragrant basil leaves on a thin, crispy crust.',
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
    title: 'Pepperoni Pizza',
    description:
      'Pepperoni Pizza: A beloved favorite, pepperoni pizza boasts a zesty tomato sauce topped with generous slices of spicy pepperoni and gooey melted cheese, all baked to golden perfection.',
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
    title: 'Vegetarian Pizza',
    description:
      'Vegetarian Pizza: Bursting with colorful vegetables like bell peppers, mushrooms, onions, and olives, this vegetarian delight offers a flavorful and wholesome alternative for pizza lovers.',
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
    title: 'Hawaiian Pizza',
    description:
      'Hawaiian Pizza: A tropical twist on tradition, Hawaiian pizza combines savory ham, juicy pineapple chunks, and melted cheese atop a savory tomato sauce base, creating a sweet and savory flavor sensation.',
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
    title: 'BBQ Chicken Pizza ',
    description:
      'BBQ Chicken Pizza: Featuring tender chunks of grilled chicken, tangy barbecue sauce, caramelized onions, and smoky gouda cheese, BBQ chicken pizza offers a mouthwatering blend of flavors with every bite.',
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
    title: 'Four Cheese Pizza',
    description:
      'Four Cheese Pizza: Cheese lovers rejoice! The four cheese pizza combines the creamy richness of mozzarella, provolone, fontina, and Parmesan cheeses, creating a decadent and indulgent pizza experience.',
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
    title: 'Supreme Pizza',
    description:
      'Supreme Pizza: Piled high with an assortment of savory toppings such as pepperoni, sausage, bell peppers, onions, and olives, the supreme pizza is a hearty and satisfying choice for pizza enthusiasts.',
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
    title: 'Mushroom Truffle Pizza',
    description:
      'Mushroom Truffle Pizza: Indulge in the earthy richness of mushroom truffle pizza, adorned with a decadent blend of exotic mushrooms, aromatic truffle oil, and creamy fontina cheese, all atop a crisp crust.',
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
    title: 'Buffalo Chicken Pizza',
    description:
      'Buffalo Chicken Pizza: Spice things up with buffalo chicken pizza, featuring tender chicken coated in fiery buffalo sauce, tangy blue cheese crumbles, and crisp celery, delivering a fiery kick with every bite.',
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
    title: 'Capricciosa Pizza',
    description:
      'Capricciosa Pizza: A classic Italian favorite, the Capricciosa pizza boasts a medley of artichoke hearts, savory ham, earthy mushrooms, and briny olives, all nestled atop a bed of tomato sauce and mozzarella cheese.',
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
    title: 'Buffalo Chicken Pizza',
    description:
      'Spice things up with buffalo chicken pizza, featuring tender chicken coated in fiery buffalo sauce',
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
  title: 'Capricciosa Pizza',
  description:
    'Capricciosa Pizza: A classic Italian favorite, the Capricciosa pizza boasts a medley of artichoke hearts',
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
