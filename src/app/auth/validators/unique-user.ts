import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class UniqueUser implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const { value } = control;

    // If the field is empty, we don't need to validate
    if (!value) {
      return of(null); // No validation errors
    }

    return this.http.post<any>('https://api.angular-email.com/auth/username', {
      username: value
    }).pipe(
      map((response) => {
        if (response && response.available === true) {
          return null; // Username is available (valid)
        } else {
          return { nonUniqueUser: true }; // Username is taken (validation error)
        }
      }),
      catchError(() => {
        // Handle HTTP errors gracefully and always return an error object
        return of({ serverError: true });
      })
    );
  };
}
