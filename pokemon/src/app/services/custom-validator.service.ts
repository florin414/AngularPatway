import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidatorService {
  private validateNumber(value: any): ValidationErrors | null {
    let regexPatternForNumbers: string = '^[0-9]+$';

    let regex = new RegExp(regexPatternForNumbers);

    return !regex.test(value) ? { numbersOnly: true } : null;
  }

  private validateAlphabet(value: any): ValidationErrors | null {
    let regexPatternAlphabet: string = '^[a-zA-Z]+$';

    let regex = new RegExp(regexPatternAlphabet);

    return !regex.test(value) ? { alphabet: true } : null;
  }

  private validateNumberAndAlphabet(value: any): ValidationErrors | null {
    let regexPatternNumbersAndAlphabets: string = '^[a-zA-Z0-9]+$';

    let regex = new RegExp(regexPatternNumbersAndAlphabets);

    return !regex.test(value) ? { numbersAndAlphabetsOnly: true } : null;
  }

  private validateImageUrl(value: any): ValidationErrors | null {
    let regexPatternImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    let regex = new RegExp(regexPatternImageUrl);

    return !regex.test(value) ? { imageUrl: true } : null;
  }

  private validateNumbersWith2Decimal(value: any): ValidationErrors | null {
    let regexPatternNumbersWith2DecimalPlaces: string = '^[0-9]*(.[0-9]{0,2})$';

    let regex = new RegExp(regexPatternNumbersWith2DecimalPlaces);

    return !regex.test(value) ? { numbersWith2DecimalOnly: true } : null;
  }

  customNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validateNumber(control.value);
    };
  }

  customNumbersWith2DecimalValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validateNumbersWith2Decimal(control.value);
    };
  }

  customNumberAndAlphabetValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validateNumberAndAlphabet(control.value);
    };
  }

  customImageUrlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validateImageUrl(control.value);
    };
  }

  customAlphabetValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validateAlphabet(control.value);
    };
  }
}
