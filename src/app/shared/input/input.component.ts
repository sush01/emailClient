import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';
import { AbstractControl, FormControl, Validator} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input() label: string = '';
  @Input() control!: FormControl<any>;
  @Input() inputType:string = 'text';


  showErrors(){
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
