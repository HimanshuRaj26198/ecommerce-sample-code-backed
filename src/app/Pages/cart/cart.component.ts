import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private Cart: CartService) {}
  cartList: any = [];
  grandTotal: any;
  ngOnInit(): void {
    this.Cart.getCartProducts().subscribe(
      (res: any) => {
        this.cartList = res;
        this.grandTotal = this.Cart.getTotalPrice();
        console.log('GrantDtotal', this.grandTotal);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  removeItem(product: any) {
    this.Cart.removeItem(product);
  }
}
