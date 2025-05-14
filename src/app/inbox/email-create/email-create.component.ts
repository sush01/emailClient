import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { EmailFormComponent } from '../email-form/email-form.component';
import { Email } from '../email';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-email-create',
  imports: [ModalComponent, EmailFormComponent, CommonModule],
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css'
})
export class EmailCreateComponent {

showModal = false;
email: Email;

constructor(private authService : AuthService){
  this.email = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text:'',
    from:`${authService.username}@angular-email.com`
  };
}

}
