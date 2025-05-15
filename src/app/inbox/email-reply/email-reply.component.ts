import { Component , Input, OnInit} from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { CommonModule } from '@angular/common';
import { Email } from '../email';
import { EmailFormComponent } from "../email-form/email-form.component";
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  imports: [ModalComponent, CommonModule, EmailFormComponent],
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.css'
})
export class EmailReplyComponent implements OnInit {
showModal = false;
@Input() email!: Email;
text = this.email.text.replace(/\n/gi,'\n>');

constructor(private emailService: EmailService){

}

ngOnInit() {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n-------------${this.email.from} wrote: \n>${this.text}`

    }
}

onSubmitEmail(email: Email){
  this.emailService.sendEmail(email).subscribe(()=> {
    this.showModal = false;
  })

}
}
