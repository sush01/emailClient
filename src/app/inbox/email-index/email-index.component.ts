import { Component, OnInit } from '@angular/core';
import { EmailService, EmailSummary } from '../email.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-email-index',
  imports: [CommonModule, RouterModule],
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css'
})

export class EmailIndexComponent implements OnInit {

  emails: EmailSummary[] = [];

  constructor(private emailService: EmailService){}

  ngOnInit(){
    this.emailService.getEmails().subscribe((emails) => {
      this.emails = emails;

    });
  }

}
