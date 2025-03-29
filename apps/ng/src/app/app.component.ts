import {Component, computed, signal} from '@angular/core';
import {isEven} from '@npm-mono/utils';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule
  ],
  template: `
    <h2>
      <div>{{num()}}</div>
      <button (click)="num.set(num() + 1)">+</button>
    </h2>

    <div>is even: {{ isEven() }}</div>
  `
})
export class AppComponent {
  num = signal(0);
  isEven = computed(() => isEven(this.num()))
}
