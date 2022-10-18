import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateProductComponent } from "./create-product/create-product.component";

const routes: Routes = [
  { path : 'product', component : CreateProductComponent },
  { path : 'product-list', component : ProductListComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ProductRoutingModule { }
