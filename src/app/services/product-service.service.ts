import { Injectable } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];


   getAllProducts()
   {
    return this.products;
   }


   getProductById(id:number)
   {
    if(isNaN(id))
    {
      return null;
    }

    const product = this.products.find(p => p.id == id);

    return product?.id;
   }




_url:string="/assets/Data/Products.json";
   _postUrl="https://jsonplaceholder.typicode.com/posts";
 
   constructor(private http:HttpClient) { }
 
   getProducts():Observable<IProduct[]>
   {
     return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
       return throwError(()=>err.message ||"server error");
     }));
   } 
}
