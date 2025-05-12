import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  imports: [],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent  implements OnInit{
  @Input() email: Email | undefined;
  emailForm: FormGroup | undefined;

  ngOnInit(){
    if (this.email){
      const { subject, from, to, text } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to),
      from: new FormControl(from),
      subject: new FormControl(subject),
      text: new FormControl (text)
    });
    }
    
  }

}
