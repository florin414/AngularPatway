import { CreateProductService } from './../../services/create-product.service';
import { Country } from '../../models/product/country';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;
  countries: Country[] = [];

  get addNewProduct(){
    return this.productForm.controls["addNewProduct"] as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private createProductService: CreateProductService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      addNewProduct: this.formBuilder.array([this.buildNewProduct()])
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
      phone: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl: ['', [Validators.required]],
    });
  }

  newProduct(): void {
    this.addNewProduct.push(this.buildNewProduct());
  }

  save(): void {
    console.log(this.productForm);
    console.log('Saved: ' + JSON.stringify(this.productForm.value));
  }
}
