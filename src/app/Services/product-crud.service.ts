import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductCrudService {

  api_url:string='https://localhost:7111/api/Gateway/allproducts';
  api_url_add:string ='https://localhost:7037/api/ProductCategory/addProduct'
  constructor(private http:HttpClient) { }

  listOfProducts():Observable<any>{
      return this.http.get(this.api_url);
  }

  create(data:any):Observable<Products[]>{
    return this.http.post<Products[]>(`${this.api_url}`,data);
  }

  // delete(id:any):Observable<Products[]>{
  //   return this.http.post<Products[]>(`${this.api_url}`,id);
  // }

}
