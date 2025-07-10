import { Component } from '@angular/core';
import { Products } from '../products/products';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AddProductsComponent } from "../add-products/add-products.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  products: Products[] = [];

  constructor(
    private productService: ProductService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProduct()
      .subscribe((data) => {
        this.products = data;
      });
  }

  addProduct(){
    this.router.navigate(["/addProduct"]);
  }
  editProduct(){
    this.router.navigate(["/edit"]);
  }

  deleteProduct(id:number) {

    this.productService.deleteProduct(id)
    .subscribe(()=>{
      this.products =this.products.filter(product =>{
        product.id != id;
      })
    });
  
  }
}
