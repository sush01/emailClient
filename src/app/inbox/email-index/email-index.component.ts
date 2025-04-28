import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  imports: [],
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css'
})

export class EmailIndexComponent implements OnInit {

  constructor(private emailService: EmailService){}

  ngOnInit(){
    this.emailService.getEmails().subscribe(() => {});
  }

}
