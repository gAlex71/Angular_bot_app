import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  template: `
    <form>
      <h2>Обратная связь</h2>
      <textarea [value]="feedback()" (input)="handleChange($event)"></textarea>
      <h4>Значение поля: {{ feedback() }}</h4>
    </form>
  `
})
export class FeedbackComponent {
  feedback = signal('')

  handleChange(event: any) {
    this.feedback.set(event.target.value)
  }
}
