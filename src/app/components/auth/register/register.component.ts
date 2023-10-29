import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  user: any = {};

  onSubmit() {
    // Implement the registration logic here.
    // You can send the user object to your registration service or API.
    // Example: this.authService.register(this.user);
  }
}
