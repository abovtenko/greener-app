import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  onSubmit() {
    // Implement login logic here
    console.log('Form submitted');

    this.router.navigate(['/dashboard']);
  }
}
