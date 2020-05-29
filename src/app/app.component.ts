import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  randomText = lorem.sentence();
  userInput = '';
  correct = false;

  onInput(value: string) {
    this.userInput = value;
    if (this.userInput === this.randomText) this.correct = true;
  }
}
