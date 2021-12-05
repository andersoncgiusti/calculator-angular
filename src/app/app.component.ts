import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator Angular';

  //created the variable result so I can write it in the input and call the eval function to perform the calculation
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
  try {
    this.result = eval(this.result);

      if (!this.result) {
        Swal.fire({
          icon: 'error',
          iconColor: '#3f4555',
          title: 'Oops...',
          text: 'INSERT A VALUE ',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#3f4555',
        })
        return         
      } 
    this.result = String(this.result)    
  } catch(e) {
    Swal.fire({
      icon: 'error',
      iconColor: '#3f4555',
      title: 'Oops...',
      text: 'THERE WAS SOMETHING WRONG',
      showConfirmButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#3f4555',
    })
    return 
    }
  }
}
