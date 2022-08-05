import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private User: UserService, private router: Router) {}
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    this.User.signup(this.userForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['signin']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
