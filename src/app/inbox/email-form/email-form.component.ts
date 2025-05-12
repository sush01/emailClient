import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
  @Input() email: Email | undefined;
  emailForm: FormGroup;  

  constructor(private fb: FormBuilder) {
    // Initialize emailForm in the constructor
    this.emailForm = this.fb.group({
      to: new FormControl(''),
      from: new FormControl(''),
      subject: new FormControl(''),
      text: new FormControl(''),
    });
  }

  ngOnInit() {
    if (this.email) {
      // If an email is passed as input, populate the form
      this.emailForm.patchValue({
        to: this.email.to,
        from: this.email.from,
        subject: this.email.subject,
        text: this.email.text,
      });
    }
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
}
