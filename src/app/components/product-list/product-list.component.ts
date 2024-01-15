import { Component, Input } from '@angular/core';
import { IProduct } from '../../services/products.service';
import { RouterLink } from '@angular/router';
//test commit for authentication
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>{{ title }}</h2>
    <h4>{{ subtitle }}</h4>
    <ul>
      @for (prod of products; track prod.id) {
        <li [routerLink]="'/product/' + prod.id">
          <div>{{ prod.title }}</div>
          <div>{{ prod.name }}</div>
          <div>{{ prod.description }}</div>
        </li>
      }
    </ul>
  `
})
export class ProductListComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() products!: IProduct[];
}
