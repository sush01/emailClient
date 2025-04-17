import { CommonModule } from '@angular/common';
import { Component , inject} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUser } from '../validators/unique-user';
import { InputComponent } from "../../shared/input/input.component";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
    private matchPassword: MatchPassword,
    private authService: AuthService,
    private router: Router
  ){}

  get usernameControl(): FormControl {
    return this.authForm.get('username') as FormControl;
  }
  
  get passwordControl(): FormControl {
    return this.authForm.get('password') as FormControl;
  }
  get passwordConfirmationControl(): FormControl {
    return this.authForm.get('passwordConfirmation') as FormControl;
  }
  
  onSubmit(){
    if(this.authForm.invalid){
      return;
    }
    this.authService.signup({
      username: this.usernameControl.value!,
      password: this.passwordControl.value!,
      passwordConfirmation: this.passwordConfirmationControl.value!
    })
    .subscribe( {
      //console.log(response.username);
      next: response => {
        this.router.navigateByUrl('/inbox');
      },
      error: err => {
        if (!err.status){
          this.authForm.setErrors({noConnection: true });
        }else{
          this.authForm.setErrors({ unknownError: true});
        }
      }
    });
  }


}
