import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthService } from "../auth.service";

@Injectable({ providedIn: 'root' })
export class UniqueUser implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const { value } = control;

    // If the field is empty, we don't need to validate
    if (!value) {
      return of(null); // No validation errors
    }

    return this.authService.usernameAvailable(value)
    .pipe(
      map((response) => {
        if (response && response.available === true) {
          return null; // Username is available (valid)
        } else {
          return { nonUniqueUser: true }; // Username is taken (validation error)
        }
      }),
      catchError((error) => {
        // Handle HTTP errors gracefully and always return an error object
        console.error('Error occurred during username validation:', error);
        return of({ serverError: true });
      })
    );
  };
}
