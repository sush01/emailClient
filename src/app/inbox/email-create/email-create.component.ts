import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { EmailFormComponent } from '../email-form/email-form.component';
import { Email } from '../email';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-create',
  imports: [ModalComponent, EmailFormComponent, CommonModule],
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css'
})
export class EmailCreateComponent {

showModal = false;
email: Email;

constructor(){
  this.email = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text:'',
    from:'fty@angular-email.com'
  };
}

}
