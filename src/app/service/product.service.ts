import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:3000/products";

  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get<Products[]>(this.url);
  }

  addProduct(newProduct:Products){
    return this.http.post<Products[]>(this.url,newProduct);
  }

  getProductById(id:number){
    return this.http.get<Products>(`${this.url}/${id}`);
  }

  updateProduct(data:Products){
    return this.http.put(`${this.url}/${data.id}`,data);
  }
}
