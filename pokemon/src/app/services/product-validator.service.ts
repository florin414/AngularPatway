import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ProductValidationErrorsService } from './product-validation-errors.service';
@Injectable({
  providedIn: 'root',
})
export class ProductValidatorService {
  constructor(
    private productValidationErrorsService: ProductValidationErrorsService
  ) {}
  public numberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.productValidationErrorsService.validateNumber(
        control.value
      );
    };
  }

  public numbersWith2DecimalValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.productValidationErrorsService.validateNumbersWith2Decimal(
        control.value
      );
    };
  }

  public numberAndAlphabetValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.productValidationErrorsService.validateNumberAndAlphabet(
        control.value
      );
    };
  }

  public imageUrlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.productValidationErrorsService.validateImageUrl(
        control.value
      );
    };
  }

  public alphabetValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.productValidationErrorsService.validateAlphabet(
        control.value
      );
    };
  }
}
