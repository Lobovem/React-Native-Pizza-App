import { action, makeObservable, observable } from 'mobx';
import { IMockData, mockItemData } from '../screens/home/components/MochData';

interface IOrderStore {
  orders: IMockData[];
}

class OrdersStore implements IOrderStore {
  @observable orders: IMockData[];
  @observable wishList: IMockData[];

  constructor() {
    this.orders = [];
    this.wishList = [];
    makeObservable(this);
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

  @action addToWishList(itemOrdering: IMockData): void {
    const itemOrderingOption = itemOrdering.options?.find((option) => option.active);
    // itemOrdering.favorite = true;
    // console.log(itemOrdering.favorite);

    const existingItem = this.wishList.find((itemBasket: IMockData) => {
      const itemFromBasketOption = itemBasket.options?.find((option) => option.active);

      return (
        itemBasket.id === itemOrdering.id &&
        itemOrderingOption.name === itemFromBasketOption.name
      );
    });

    if (!existingItem) {
      this.wishList = [...this.wishList, itemOrdering];
    }
  }

  @action removeItemFromWishList(itemOrdering: IMockData | []): void {
    if (Array.isArray(itemOrdering) && itemOrdering.length === 0) {
      this.wishList = [];
    } else {
      const existingItem = this.wishList.find((itemBasket: IMockData) => {
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

      this.wishList = this.wishList.filter((order) => existingItem !== order);
    }
  }
}

export default new OrdersStore();
