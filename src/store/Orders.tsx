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
      const activeOption = item.options.find((option) => option.active === true);

      if (item.id === data.id && activeOption.active === true) {
        item.quantity += data.quantity;
      }
    });

    const existingItem = this.orders.find((item) => {
      const activeItem = item.options.find((option) => option.active === true);
      console.log(activeItem);

      return item.id === data.id && activeItem.active === true;
    });

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
