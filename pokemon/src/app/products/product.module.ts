import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'create-product', component : ProductComponent }
];

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class ProductModule { }
