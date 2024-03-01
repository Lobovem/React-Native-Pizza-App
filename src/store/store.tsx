import {
  action,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import {
  IMockData,
  ISlider,
  mockItemData,
} from '../Screens/HomeScreen/components/MochData';
import GlobalApi from '../utils/GlobalApi';

// interface IOrderStore {
//   mockData: IMockData[];
//   orders: IMockData[];
//   wishList: IMockData[];
//   slidersList: any[];
//   status: string;
// }

interface IOptions {
  name: string;
  active: boolean;
}

interface ISliderResponse {
  sliders: ISlider[];
}

class OrdersStore {
  mockData: IMockData[];
  orders: IMockData[];
  wishList: IMockData[];
  slidersList: any[];
  status: string;

  constructor() {
    this.mockData = mockItemData;
    this.orders = [];
    this.wishList = [];
    this.slidersList = [];
    this.status = 'init';
    makeAutoObservable(this);
  }

  *fetchHomeSliders() {
    this.status = 'pending';
    try {
      const resp: ISliderResponse = yield GlobalApi.getSliders();

      this.slidersList = resp.sliders;
      this.status = 'success';
    } catch {
      this.status = 'error';
    }
  }

  @action setOrders(itemOrdering: IMockData): void {
    const itemOrderingOption = itemOrdering.options?.find((option) => option.active);

    const existingItem = this.orders.find((itemBasket: IMockData) => {
      const itemFromBasketOption = itemBasket.options?.find((option) => option.active);

      return (
        itemBasket.id === itemOrdering.id &&
        itemOrderingOption.name === itemFromBasketOption.name
      );
    });

    if (existingItem) {
      existingItem.quantity += itemOrdering.quantity;
    } else {
      this.orders = [...this.orders, itemOrdering];
    }
  }

  @action removeOrders(itemOrdering: IMockData | []): void {
    if (Array.isArray(itemOrdering) && itemOrdering.length === 0) {
      this.orders = [];
    } else {
      const existingItem = this.orders.find((itemBasket: IMockData) => {
        if ('options' in itemOrdering) {
          const itemOrderingOption = itemOrdering.options?.find(
            (option) => option.active
          );
          const itemFromBasketOption = itemBasket.options?.find(
            (option) => option.active
          );

          return (
            itemBasket.id === itemOrdering.id &&
            itemOrderingOption.name === itemFromBasketOption.name
          );
        }
        return false;
      });

      this.orders = this.orders.filter((order) => existingItem !== order);
    }
  }

  @action addQuantity(itemOrdering: IMockData): void {
    const existingItem = this.orders.find((itemBasket: IMockData) => {
      const itemOrderingOption = itemOrdering.options?.find((option) => option.active);
      const itemFromBasketOption = itemBasket.options?.find((option) => option.active);

      return (
        itemBasket.id === itemOrdering.id &&
        itemOrderingOption.name === itemFromBasketOption.name
      );
    });

    this.orders.forEach((itemSearch: IMockData) => {
      if (existingItem === itemSearch) {
        itemSearch.quantity += 1;
      }
    });
  }

  @action delQuantity(itemOrdering: IMockData): void {
    const existingItem = this.orders.find((itemBasket: IMockData) => {
      const itemOrderingOption = itemOrdering.options?.find((option) => option.active);
      const itemFromBasketOption = itemBasket.options?.find((option) => option.active);

      return (
        itemBasket.id === itemOrdering.id &&
        itemOrderingOption.name === itemFromBasketOption.name
      );
    });

    this.orders.forEach((itemSearch: IMockData) => {
      if (existingItem === itemSearch && itemSearch.quantity > 0) {
        itemSearch.quantity -= 1;
      }
    });
  }

  // @action handleFavoriteItem(itemOrdering: IMockData): void {
  //   itemOrdering.favorite = !itemOrdering.favorite;

  //   const existingItem = this.wishList.find((itemBasket: IMockData) => {
  //     return itemBasket.id === itemOrdering.id;
  //   });

  //   if (existingItem) {
  //     this.wishList = this.wishList.filter((item) => item.id !== itemOrdering.id);
  //   } else {
  //     this.wishList = [...this.wishList, itemOrdering];
  //   }
  // }

  @action handleFavoriteItem(itemOrdering: IMockData): void {
    const existingItem = this.wishList.find((itemBasket: IMockData) => {
      return itemBasket.id === itemOrdering.id;
    });

    const item = this.mockData.find(
      (itemBasket: IMockData) => itemBasket.id === itemOrdering.id
    );

    if (!item) {
      return;
    }

    item.favorite = !item.favorite;

    if (existingItem) {
      this.wishList = this.wishList.filter((item) => item.id !== itemOrdering.id);
    } else {
      this.wishList = [...this.wishList, itemOrdering];
    }
  }

  @action cleanFavoriteItemsAll(): void {
    this.mockData.map((item) => {
      item.favorite = false;
    });

    this.wishList = [];
  }

  @action handleItemOptions(name: string, options: IOptions[]) {
    // Create copy array
    const updatedOptions = options.map((option) => ({ ...option }));

    // Set active option
    updatedOptions.forEach((item) => {
      item.active = item.name === name;
    });

    return updatedOptions;
  }

  @computed get calcSumOrders() {
    return this.orders.reduce((acc, item) => item.priceNew * item.quantity + acc, 0);
  }
}

export default new OrdersStore();