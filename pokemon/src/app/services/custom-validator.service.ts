import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidatorService {
  validateNumbersOnly(value: any): ValidationErrors | null {
    let regexPatternForNumbers: string = '^[0-9]+$';

    let regex = new RegExp(regexPatternForNumbers);

    if (!regex.test(value)) {
      return { "numbersOnly": true };
    }
    return null;
  }

  validateNumbersAndAlphabetsOnly(value: any): ValidationErrors | null {
    let regexPatternNumbersAndAlphabets: string = '^[a-zA-Z0-9]+$';

    let regex = new RegExp(regexPatternNumbersAndAlphabets);

    if (!regex.test(value)) {
      return { "numbersAndAlphabetsOnly": true };
    }
    return null;
  }

  validateImageUrl(value: any): ValidationErrors | null {
    let regexPatternImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    let regex = new RegExp(regexPatternImageUrl);

    if (!regex.test(value)) {
      return { "imageUrl": true };
    }
    return null;
  }

  validateNumbersWith2DecimalPlacesOnly(value: any): ValidationErrors | null {
    let regexPatternNumbersWith2DecimalPlaces: string = '^[0-9]*(.[0-9]{0,2})$';

    let regex = new RegExp(regexPatternNumbersWith2DecimalPlaces);

    if (!regex.test(value)) {
      return { "numbersWith2DecimalOnly": true };
    }
    return null;
  }

  public customNumbersOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validateNumbersOnly(control.value);
    };
  }

  public customNumbersWith2DecimalPlacesOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validateNumbersWith2DecimalPlacesOnly(control.value);
    };
  }

  public customNumbersAndAlphabetsOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validateNumbersAndAlphabetsOnly(control.value);
    };
  }

  public customImageUrlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validateImageUrl(control.value);
    };
  }
}
