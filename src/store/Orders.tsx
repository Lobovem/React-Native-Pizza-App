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

  @action setOrders(data: IMockData) {
    this.orders = [...this.orders, data];
  }

  @action removeOrders(data: IMockData[]) {
    this.orders = [...data];
  }
}

export default new OrdersStore();
