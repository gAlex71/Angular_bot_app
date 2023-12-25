import { Injectable } from '@angular/core';

export interface IProduct {
  id: number;
  name: string;
  type: string;
  title: string;
  description: string;
  count: number;
}

const products: IProduct[] = [
  {
    id: 0,
    name: 'Стиральная машина',
    type: 'first',
    title: 'Для хозяек',
    description: 'Стирка вещей',
    count: 5
  },
  {
    id: 1,
    name: 'Утюг',
    type: 'second',
    title: 'Для хозяек',
    description: 'Глажка вещей',
    count: 3
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products: IProduct[] = products;

  getById(id: number) {
    return this.products.find(prod => prod.id === id);
  }

  get byGroup(){
    return this.products.reduce((group: any, product) => {
      if(!group[product.type]){
        group[product.type] = [];
      }

      group[product.type].push(product);
      return group;
    }, {})
  }
}
