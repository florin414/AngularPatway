import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductValidationErrorsService {
  public validateNumber(value: any): ValidationErrors | null {
    let regexPatternForNumbers: string = '^[0-9]+$';

    let regex = new RegExp(regexPatternForNumbers);

    return !regex.test(value) ? { number: true } : null;
  }

  public validateAlphabet(value: any): ValidationErrors | null {
    let regexPatternAlphabet: string = '^[a-zA-Z]+$';

    let regex = new RegExp(regexPatternAlphabet);

    return !regex.test(value) ? { alphabet: true } : null;
  }

  public validateNumberAndAlphabet(value: any): ValidationErrors | null {
    let regexPatternNumbersAndAlphabets: string = '^[a-zA-Z0-9]+$';

    let regex = new RegExp(regexPatternNumbersAndAlphabets);

    return !regex.test(value) ? { numberAndAlphabet: true } : null;
  }

  public validateImageUrl(value: any): ValidationErrors | null {
    let regexPatternImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    let regex = new RegExp(regexPatternImageUrl);

    return !regex.test(value) ? { imageUrl: true } : null;
  }

  public validateNumbersWith2Decimal(value: any): ValidationErrors | null {
    let regexPatternNumbersWith2DecimalPlaces: string = '^[0-9]*(.[0-9]{0,2})$';

    let regex = new RegExp(regexPatternNumbersWith2DecimalPlaces);

    return !regex.test(value) ? { numberWith2Decimal: true } : null;
  }
}
