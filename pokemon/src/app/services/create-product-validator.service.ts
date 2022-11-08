import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CreateProductValidationErrorsService } from './create-product-validation-errors.service';

@Injectable({
  providedIn: 'root',
})
export class CreateProductValidatorService {
  constructor(
    private createProductValidationErrorsService: CreateProductValidationErrorsService
  ) {}
  public numberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.createProductValidationErrorsService.validateNumber(
        control.value
      );
    };
  }

  public numbersWith2DecimalValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.createProductValidationErrorsService.validateNumbersWith2Decimal(
        control.value
      );
    };
  }

  public numberAndAlphabetValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.createProductValidationErrorsService.validateNumberAndAlphabet(
        control.value
      );
    };
  }

  public imageUrlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.createProductValidationErrorsService.validateImageUrl(
        control.value
      );
    };
  }

  public alphabetValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.createProductValidationErrorsService.validateAlphabet(
        control.value
      );
    };
  }
}
