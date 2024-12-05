import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  // onSubmit() {
  //     this.authService.login(this.username, this.password).subscribe({
  //         next: (response: { token: string; }) => {
  //             localStorage.setItem('token', response.token);
  //             this.router.navigate(['/dashboard']);
  //         },
  //         error: (err: any) => {
  //             console.error('Login failed', err);
  //         },
  //     });
  // }
}
