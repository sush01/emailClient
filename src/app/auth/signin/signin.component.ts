import { Component } from '@angular/core';
import { InputComponent } from "../../shared/input/input.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  authForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/[a-z0-9]+$/)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    });


    get usernameControl(): FormControl {
      return this.authForm.get('username') as FormControl;
    }
    
    get passwordControl(): FormControl {
      return this.authForm.get('password') as FormControl;
    }
}
