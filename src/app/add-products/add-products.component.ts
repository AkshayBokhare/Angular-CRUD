import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../products/products';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  newProductForm : Products ={
        id:0,
        name:'',
        price:0,
  }
  responce:string=""
  constructor(
    private producService:ProductService,
    private router :Router
  
  ){}

  addNewProduct(){
    this.producService.addProduct(this.newProductForm)
    .subscribe((responce)=>{
      this.responce = "Product Add Sucessfull...."
      console.log("Responce",responce);
      this.router.navigate(["/home"])
    });
  }
}
