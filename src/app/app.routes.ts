import { Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [

    {path:"addProduct",component:AddProductsComponent},
    { path: "home", component: HomeComponent },
    { path: "edit/:id", component: EditProductComponent },
    
    { path: "**", redirectTo:"home" ,pathMatch:"full" }


];
