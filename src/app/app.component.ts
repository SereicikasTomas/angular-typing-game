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
  splitChars = this.randomText.split('');

  onInput(value: string) {
    this.userInput = value;

    if (this.userInput === this.randomText) this.correct = true;
  }

  check(char: string, input: string) {
    if (!input) {
      return;
    }

    return char === input ? 'correct' : 'wrong';
  }
}
