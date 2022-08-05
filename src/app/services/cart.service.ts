import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public itemList: any = [];
  public cartList: any = new BehaviorSubject<any>([]);
  public itemNumber = new BehaviorSubject(this.itemList.length);

  constructor() {}

  addToCart(item: any) {
    this.itemList.push(item);
    this.cartList.next(this.itemList);
    this.getTotalPrice();
  }

  getCartProducts() {
    return this.cartList.asObservable();
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.itemList.forEach((a: any) => {
      grandTotal += a.price;
    });
    return grandTotal;
  }

  removeItem(i: any) {
    console.log(i);
    this.itemList.splice(i, 1);
    this.cartList.next(this.itemList);
  }
}
