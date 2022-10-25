import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomOnlyNumberValidatorService {
  public validate(value: any): ValidationErrors | null {
    let regexPatternForInteger: string = '^[0-9]+$';

    let regex = new RegExp(regexPatternForInteger);

    if (!regex.test(value)) {
      return {"integerPattern": true};
    }
    return null;
  }

  public customMassRangeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.validate(control.value);
    };
  }
}
