import { CommonModule } from '@angular/common';
import { Component , inject} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUser } from '../validators/unique-user';
import { InputComponent } from "../../shared/input/input.component";
@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  private uniqueUser = inject(UniqueUser);

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/[a-z0-9]+$/)
    ], [this.uniqueUser.validate]
  ),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
    ])
  },{validators: [MatchPassword.validate()]});

  constructor(
    private matchPassword: MatchPassword
  ){}

  get usernameControl(): FormControl {
    return this.authForm.get('username') as FormControl;
  }
  

}
