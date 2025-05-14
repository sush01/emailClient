import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Email } from '../email';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../shared/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'], 
})
export class EmailFormComponent implements OnInit {
  @Input() email!: Email;
  emailForm!: FormGroup;  
  @Output() emailSubmit = new EventEmitter<Email>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      to: new FormControl(this.email?.to || '', [Validators.required, Validators.email]),
      from: new FormControl({ value: this.email?.from || '', disabled: true }),
      subject: new FormControl(this.email?.subject || '', [Validators.required]),
      text: new FormControl(this.email?.text || '', [Validators.required]),
    });
    }
  

  // Getter methods to access individual form controls
  get toControl(): FormControl {
    return this.emailForm.get('to') as FormControl;
  }

  get fromControl(): FormControl {
    return this.emailForm.get('from') as FormControl;
  }

  get subjectControl(): FormControl {
    return this.emailForm.get('subject') as FormControl;
  }

  get textControl(): FormControl {
    return this.emailForm.get('text') as FormControl;
  }

  onSubmit(){
    if (this.emailForm.invalid){
      return;
    }
    this.emailSubmit.emit(this.email);


  }
}
