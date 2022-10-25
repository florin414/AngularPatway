import { Product } from './../../models/product/product';
import { CreateProductService } from './../../services/create-product.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from 'src/app/services/custom-validator.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;
  messageName: string = '';

  get addNewProduct() {
    return this.productForm.controls['addNewProduct'] as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private createProductService: CreateProductService,
    private customValidationService: CustomValidatorService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      addNewProduct: this.formBuilder.array([this.buildNewProduct()]),
    });
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

  reset(): void{
    while (this.addNewProduct.length > 0) {
      this.addNewProduct.removeAt(0);
    }
    this.newProduct();
  }

  save(): void {
    console.log('Saved: ' + JSON.stringify(this.productForm.value));
    let product = {} as Product;
    product.name = 'name';
    product.description = 'desc';
    product.imageUrl = '';
    product.phone = 323;
    product.price = 212.39;
    product.category = 0;
    product.select = 1;

    this.createProductService.addProduct(product).subscribe();
  }
}
