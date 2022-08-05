import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private Cart: CartService,
    private User: UserService,
    private router: Router
  ) {}

  public cart: number = 0;
  loggedIn = this.User.loggedIn();

  ngOnInit(): void {
    this.Cart.getCartProducts().subscribe((res: any) => {
      console.log(res);
      this.cart = res.length;
    });
  }

  signOut() {
    this.User.logOut();
    this.router.navigate(['signin']);
  }
}
