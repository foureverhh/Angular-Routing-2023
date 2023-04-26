import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, ProductResolved } from '../product';

@Component({
  templateUrl: './product-edit-tags.component.html'
})
export class ProductEditTagsComponent implements OnInit {
  errorMessage: string | undefined = '';
  newTags = '';
  product: Product | null | undefined;//= { id: 1, category: 'test', tags: ['test'] };

  constructor(private route: ActivatedRoute) { 
    console.log("tag", this.route.snapshot.data['resolvedData'])
  }

  ngOnInit(): void {
    /*
    const resovledData: ProductResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resovledData.error;
    this.product = resovledData.product;
    */
  }

  // Add the defined tags
  addTags(): void {
    if (this.product) {
      if (!this.newTags) {
        this.errorMessage = 'Enter the search keywords separated by commas and then press Add';
      } else {
        const tagArray = this.newTags.split(',');
        this.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
        this.newTags = '';
        this.errorMessage = '';
      }
    }
  }

  // Remove the tag from the array of tags.
  removeTag(idx: number): void {
    this.product?.tags?.splice(idx, 1);
  }
}
