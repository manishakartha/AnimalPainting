import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
 templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{

  products : Product[]=[];
 constructor( private productServce: ProductService){

 }
  ngOnInit(): void {
   this.productServce.getProducts().subscribe(data=>{
    this.products=data;
   })
  }
}
