import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './product-list/product-card/product-card.component';
import { ProductFormComponent } from './create-product/product-form.component';
import { ProductService } from '../services/product.service';
import { ProductValidatorService } from '../services/product-validator.service';
@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    FlexLayoutModule,
  ],
  providers: [ProductService, ProductValidatorService],
  exports: [RouterModule],
})
export class ProductModule {}
