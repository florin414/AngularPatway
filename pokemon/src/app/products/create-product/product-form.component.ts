import { Product } from '../../models/product/product';
import { ProductService } from '../../services/product.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductValidatorService } from 'src/app/services/product-validator.service';
import { Subscription } from 'rxjs';
import { DirtyCheckComponent } from 'src/app/shared/dirty-check-component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent
  implements OnInit, DoCheck, DirtyCheckComponent
{
  protected productForm: FormGroup;
  private subscription: Subscription;
  private isDirty = false;
  private productModel: Product;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private productValidatorService: ProductValidatorService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  canDeactivate(): boolean {
    return this.isDirty;
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      product: this.formBuilder.array([this.buildNewProduct()]),
    });
    this.subscription = this.product.valueChanges.subscribe(
      () => (this.isDirty = true)
    );
  }

  ngDoCheck(): void {
    if(this.productForm.valid){
      this.isDirty = false;
    }
  }

  private buildNewProduct(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        this.productValidatorService.numberAndAlphabetValidator(),
      ]),
      select: new FormControl(0),
      category: new FormControl('',Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        this.productValidatorService.numberAndAlphabetValidator(),
      ]),
      price: new FormControl('', [
        Validators.required,
        this.productValidatorService.numbersWith2DecimalValidator(),
      ]),
      phone: new FormControl('', [
        Validators.required,
        this.productValidatorService.numberValidator(),
        Validators.maxLength(10),
      ]),
      imageUrl: new FormControl('', [
        Validators.required,
        this.productValidatorService.imageUrlValidator(),
      ]),
    });
  }

  protected get product() {
    return this.productForm.controls['product'] as FormArray;
  }

  protected addProduct(): void {
    this.product.push(this.buildNewProduct());
  }

  protected reset(): void {
    while (this.product.length > 0) {
      this.product.removeAt(0);
    }
    this.addProduct();
  }

  protected save(): void {
    if(this.productForm.valid){
      for (let product of this.product.value) {
        this.productModel = Object.assign({}, product);
        this.productService.addProduct(this.productModel).then();
      }
    }
    this.router.navigate(['/pokemons']);
  }
}
