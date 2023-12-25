import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list 
      title=""
      subtitle=""
      [products]="products.byGroup['first']"
    />
    <app-product-list 
      title=""
      subtitle=""
      [products]="products.byGroup['second']"
    />
  `
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor(){
    this.telegram.MainButton.show();
    console.log(this.products.byGroup);
  }
}
