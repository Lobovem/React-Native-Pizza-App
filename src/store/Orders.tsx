import { action, makeObservable, observable } from 'mobx';
import { IMockData } from '../screens/home/components/MochData';

interface IOrderStore {
  orders: IMockData[];
}

class OrdersStore implements IOrderStore {
  @observable orders: IMockData[];

  constructor() {
    this.orders = [];
    makeObservable(this);
  }

  @action setOrders(itemOrdering: IMockData): void {
    const existingItem = this.orders.find((itemBasket: IMockData) => {
      const itemOrderingOption = itemOrdering.options?.find((option) => option.active);
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
}

export default new OrdersStore();
