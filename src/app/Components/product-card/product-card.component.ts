import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  constructor(private Cart: CartService) {}

  ngOnInit(): void {}

  clickOnAdd(item: any) {
    this.Cart.addToCart(item);
    console.log(this.Cart.itemList);
  }
}
