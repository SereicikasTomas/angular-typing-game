import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  userInput = '';
  correct = false;
  splitChars = this.randomText.split('');

  onInput(value: string) {
    this.userInput = value;

    this.correct = this.userInput === this.randomText ? true : false;
  }

  check(char: string, input: string) {
    if (!input) {
      return;
    }

    return char === input ? 'correct' : 'wrong';
  }
}
