import { Injectable } from '@angular/core';
import { Product } from './product';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product>{

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    const id = route.paramMap?.get('id');
    if(isNaN(Number(id))) {
      const msg = `Product id was not a number: ${id}`;
      console.error(msg);
      throw new Error(msg);
    }
    return this.productService.getProduct(Number(id));
  }
}
