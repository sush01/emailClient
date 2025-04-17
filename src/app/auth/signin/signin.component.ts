import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../../shared/input/input.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, InputComponent,CommonModule],
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

    constructor (private authService: AuthService){}


    get usernameControl(): FormControl {
      return this.authForm.get('username') as FormControl;
    }
    
    get passwordControl(): FormControl {
      return this.authForm.get('password') as FormControl;
    }

    onSubmit(){
      if(this.authForm.invalid){
        return;
      }
      const { username, password } = this.authForm.value;
      if (username && password){
        this.authService.signin({username, password}).subscribe({
          next:() =>{
            //console.log('Login successful!');
          },
          error: (err) => {
            //console.error('Login error:', err);
              this.authForm.setErrors({credentials: true});
            
          }
        })
      }
      
    }
}
