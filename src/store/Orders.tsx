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

  @action setOrders(data: IMockData): void {
    this.orders.forEach((item) => {
      if (item.id === data.id) {
        item.quantity = item.quantity + data.quantity;
      }
    });

    const existingItem = this.orders.find((item) => item.id === data.id);
    if (!existingItem) {
      this.orders = [...this.orders, data];
    }
  }

  @action removeOrders(data: IMockData[]): void {
    this.orders = [...data];
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
