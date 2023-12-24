import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h2>{{ title | uppercase }}</h2>
    <button (click) = 'title = "new title"'>Button</button>
    <ul>
      @for (item of newArr; track item) {
        <li>{{item}}</li>
      }

      <hr />
    </ul>
  `
})
export class AppComponent {
  title = 'bot_mini_app';
  newArr = [1, 2, 3, 4, 5];
}
