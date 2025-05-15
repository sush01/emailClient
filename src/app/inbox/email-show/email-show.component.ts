import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';
import { CommonModule } from '@angular/common';
import { EmailReplyComponent } from '../email-reply/email-reply.component';
@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [CommonModule, EmailReplyComponent],
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css'
})
export class EmailShowComponent implements OnInit{
  email: Email | undefined;

  constructor(private route: ActivatedRoute,){
    this.email = route.snapshot.data['email'];
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit() {

  }

  
}
