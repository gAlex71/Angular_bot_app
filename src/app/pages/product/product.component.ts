import { Component } from '@angular/core';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  template: `<div>
    <h2>{{ product?.name }}</h2>
    <br />
    <div>{{ product?.title }}</div>
    <div>{{ product?.description }}</div>
  </div>`
})
export class ProductComponent {
  product: IProduct | undefined;

  constructor(
    private products: ProductsService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ){
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.getById(Number(id));
  }
}
