import { Injectable } from '@angular/core';
import { Product, ProductResolved } from './product';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<ProductResolved>{

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductResolved | Observable<ProductResolved> | Promise<ProductResolved> {
    const id = route.paramMap?.get('id');
    if(isNaN(Number(id))) {
      const msg = `Product id was not a number: ${id}`;
      console.error(msg);
      return of({ product: null, error: msg });
    }

    return this.productService.getProduct(Number(id))
    .pipe(
      map(product => ({ product: product })),
      catchError(error => {
        const msg = `Retrieval error: ${error}`;
        console.error(msg);
        return of({ product: null, error: msg });
      })
    );
  }
}
