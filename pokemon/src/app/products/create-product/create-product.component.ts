import { CreateProductService } from './../../services/create-product.service';
import { Component, OnDestroy, OnInit, OnChanges, DoCheck } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidatorService } from 'src/app/services/custom-validator.service';
import { Subscription } from 'rxjs';
import { DirtyCheckComponent } from 'src/app/shared/dirty-check-component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent
  implements OnInit, DoCheck, DirtyCheckComponent
{
  protected productForm: FormGroup;
  private subscription: Subscription;
  private isDirty = false;

  protected get product() {
    return this.productForm.controls['product'] as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private createProductService: CreateProductService,
    private customValidationService: CustomValidatorService,
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
        this.customValidationService.customNumberAndAlphabetValidator(),
      ]),
      select: new FormControl(''),
      category: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        this.customValidationService.customNumberAndAlphabetValidator(),
      ]),
      price: new FormControl('', [
        Validators.required,
        this.customValidationService.customNumbersWith2DecimalValidator(),
      ]),
      phone: new FormControl('', [
        Validators.required,
        this.customValidationService.customNumberValidator(),
        Validators.maxLength(10),
      ]),
      imageUrl: new FormControl('', [
        Validators.required,
        this.customValidationService.customImageUrlValidator(),
      ]),
    });
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
    console.log('Saved: ' + JSON.stringify(this.product.value));

    this.router.navigate(['/product-list']);

    for (let product of this.product.value) {
      this.createProductService.addProduct(product).then();
    }
  }
}
