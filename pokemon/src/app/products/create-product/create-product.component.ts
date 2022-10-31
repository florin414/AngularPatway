import { Product } from './../../models/product/product';
import { CreateProductService } from './../../services/create-product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from 'src/app/services/custom-validator.service';
import { DirtyComponent } from 'src/app/shared/dirty-component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent
  implements OnInit, OnDestroy, DirtyComponent
{
  productForm!: FormGroup;
  messageName: string = '';
  subscription!: Subscription;
  private isDirty = false;
  get addNewProduct() {
    return this.productForm.controls['addNewProduct'] as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private createProductService: CreateProductService,
    private customValidationService: CustomValidatorService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  canDeactivate() {
    return this.isDirty;
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      addNewProduct: this.formBuilder.array([this.buildNewProduct()]),
    });
    this.subscription = this.addNewProduct.valueChanges.subscribe(
      () => (this.isDirty = true)
    );
  }

  buildNewProduct(): FormGroup {
    return this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          this.customValidationService.customNumbersAndAlphabetsOnlyValidator(),
        ],
      ],
      select: [''],
      category: ['', Validators.required],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          this.customValidationService.customNumbersAndAlphabetsOnlyValidator(),
        ],
      ],
      price: [
        '',
        [
          Validators.required,
          this.customValidationService.customNumbersWith2DecimalPlacesOnlyValidator(),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          this.customValidationService.customNumbersOnlyValidator(),
          Validators.maxLength(10),
        ],
      ],
      imageUrl: [
        '',
        [
          Validators.required,
          this.customValidationService.customImageUrlValidator(),
        ],
      ],
    });
  }

  newProduct(): void {
    this.addNewProduct.push(this.buildNewProduct());
  }

  reset(): void {
    while (this.addNewProduct.length > 0) {
      this.addNewProduct.removeAt(0);
    }
    this.newProduct();
  }

  save() {
    console.log('Saved: ' + JSON.stringify(this.addNewProduct.value));

    this.addNewProduct.value.array.forEach((product: Product) =>
      this.createProductService.addProduct(product).then()
    );
  }
}
