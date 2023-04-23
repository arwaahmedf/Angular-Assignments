import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { MainComponent } from '../main/main.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products:any=[];
  errorMessage:any;
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.products = this.productService.getProductById(1);

    this.productService.getProducts().subscribe({
     next:data=>this.products=data,
      error:error=>this.errorMessage=error
    })

  }

}
