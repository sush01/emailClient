import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { EmailService } from '../email.service';
import { Email } from '../email';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css'
})
export class EmailShowComponent implements OnInit{
  email: Email | undefined;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ){}

  ngOnInit() {

    this.route.params
    .pipe(
      switchMap(({ id }) => {
        return this.emailService.getEmail(id);
      })
    )
    .subscribe(email => {
      this.email = email;
    });

  }

  
}
