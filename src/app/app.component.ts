import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator Angular';

  result: string = '';

  one() {
    this.result += '1';
  }

  two() {
    this.result += '2';
  }

  three() {
    this.result += '3';
  }

  for() {
    this.result += '4';
  }

  five() {
    this.result += '5';
  }

  six() {
    this.result += '6';
  }

  seven() {
    this.result += '7';
  }

  eight() {
    this.result += '8';
  }

  nine() {
    this.result += '9';
  }

  zero() {
    this.result += '0';
  }

  sum() {
    this.result += '+';
  }

  subtract() {
    this.result += '-';
  }

  share() {
    this.result += '/';
  }

  multiplication() {
    this.result += '*';
  }

  clear() {
    this.result = ' ';
  }

  results() {

  }

}
