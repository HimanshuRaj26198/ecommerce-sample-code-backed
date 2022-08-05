import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {}
  product: any;
  ngOnInit(): void {
    this.productService.getOne(this.router.snapshot.params.id).subscribe(
      (res: any) => {
        console.log(res);
        this.product = res.product;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
