import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Products } from '../products/products';
import { ProductService } from '../service/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
   newProductForm : Products ={
          id:0,
          name:'',
          price:0,
    }
    responce:string=""
    constructor(
      private producService:ProductService,
      private activeRouter :ActivatedRoute,
      private router: Router
    
    ){}

    ngOnInit(): void {
      this.activeRouter.paramMap.subscribe((param)=>{
          let id = Number(param.get("id"));
        this.getProductById(id);
      })
    }
  
    getProductById(id:number){
      this.producService.getProductById(id)
      .subscribe((respone)=>{
        this.newProductForm = respone;
      });
    }


  updateProduct(){
    this.producService.updateProduct(this.newProductForm)
    .subscribe({
      next:()=>{
        this.router.navigate(["/home"])
      }
    });
  }
}
