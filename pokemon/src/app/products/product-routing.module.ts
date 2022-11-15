import { ProductFormComponent } from './create-product/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListGuard } from './product-list/product-list.guard';
import { DirtyCheckGuard } from './create-product/dirty-check.guard';
const routes: Routes = [
  {
    path: '',
    component: ProductFormComponent,
    canDeactivate: [DirtyCheckGuard],
  },
  {
    path: 'product-list',
    canActivate: [ProductListGuard],
    component: ProductListComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
