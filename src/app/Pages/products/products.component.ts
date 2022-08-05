import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  productList = [];
  page = 1;
  ngOnInit(): void {
    this.getProducts(1);
  }

  getProducts(page: number) {
    this.productService.getAll(page).subscribe(
      (res: any) => {
        console.log(res);
        this.productList = res.Products;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  prevPage() {
    if (this.page > 1) {
      this.page -= 1;
      this.getProducts(this.page);
    }
  }
  nextPage() {
    this.page += 1;
    this.getProducts(this.page);
  }
}
