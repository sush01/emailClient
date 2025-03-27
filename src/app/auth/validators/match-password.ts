import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' }) // ✅ Allows Angular to inject this service
export class MatchPassword {

  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const passwordConfirmation = control.get('passwordConfirmation')?.value;

      return password === passwordConfirmation ? null : { passwordsDontMatch: true };
    };
  }
}
