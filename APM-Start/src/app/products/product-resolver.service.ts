import { Resolve,ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { ProductService } from './product.service';

@Injectable()
export class ProductResolverService implements Resolve<IProduct>{
      constructor(private productservice:ProductService){}
     resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<IProduct>{
        let id= +route.params['id'];
        return this.productservice.getProduct(id);
     }

}