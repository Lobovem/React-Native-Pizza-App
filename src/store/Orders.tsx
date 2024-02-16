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

  @action removeOrders(item: IMockData | []): void {
    if (Array.isArray(item)) {
      this.orders = [];
    } else {
      let orders = this.orders.filter((order) => order.id !== item.id);
      this.orders = [...orders];
    }
  }

  @action addQuantity(item: IMockData): void {
    this.orders.forEach((itemSearch: IMockData) => {
      if (item.id === itemSearch.id) {
        itemSearch.quantity += 1;
      }
    });
  }

  @action delQuantity(item: IMockData): void {
    this.orders.forEach((itemSearch: IMockData) => {
      if (item.id === itemSearch.id && itemSearch.quantity > 0) {
        itemSearch.quantity -= 1;
      }
    });
  }
}

export default new OrdersStore();
