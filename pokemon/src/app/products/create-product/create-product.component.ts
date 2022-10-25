import { Product } from './../../models/product/product';
import { CreateProductService } from './../../services/create-product.service';
import { Country } from '../../models/product/country';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomOnlyNumberValidatorService } from 'src/app/services/custom-only-number-validator.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;
  countries: Country[] = [];

  get addNewProduct() {
    return this.productForm.controls['addNewProduct'] as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private createProductService: CreateProductService,
    private numberValidationService: CustomOnlyNumberValidatorService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      addNewProduct: this.formBuilder.array([this.buildNewProduct()]),
    });
    this.createProductService.getCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
      },
    });
  }

  buildNewProduct(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          this.numberValidationService.customMassRangeValidator(),
          Validators.minLength(10),
        ],
      ],
      imageUrl: ['', [Validators.required]],
    });
  }

  newProduct(): void {
    this.addNewProduct.push(this.buildNewProduct());
  }

  save(): void {
    console.log('Saved: ' + JSON.stringify(this.productForm.value));
    let product = {} as Product;
    product.name = 'name';
    product.description = 'desc';
    product.imageUrl = 'sdsad';
    product.phone = 323;
    product.price = 212;

    this.createProductService.addProduct(product).subscribe();
  }
}
