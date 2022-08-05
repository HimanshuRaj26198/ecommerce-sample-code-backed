import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private User: UserService, private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    this.User.signIn(this.loginForm.value).subscribe(
      (res: any) => {
        if (res.token) {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        }
      },
      (err) => {
        console.log('Error', err);
      }
    );
  }
}
