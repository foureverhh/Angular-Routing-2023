import { Component, OnInit } from '@angular/core';

import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage:string | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
    ) {
      console.log('init productId', this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    // get number from route snapshot as paramMap
      // const id = Number(this.route.snapshot.paramMap.get('id'));
      // this.getProduct(id);
    // get product from route snapshot as data by resolver
    const resovledData: ProductResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resovledData.error;
    this.onProductRetrieved(resovledData.product);
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.onProductRetrieved(product),
      error: err => this.errorMessage = err
    });
  }

  onProductRetrieved(product: Product | null): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
