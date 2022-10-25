import { CustomValidatorService } from './../services/custom-validator.service';
import { CreateProductService } from './../services/create-product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './product-list/product-card/product-card.component';
@NgModule({
  declarations: [
    CreateProductComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    CreateProductService,
    CustomValidatorService
  ],
  exports: [RouterModule]
})
export class ProductModule { }
