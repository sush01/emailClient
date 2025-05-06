import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  imports: [],
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css'
})
export class EmailShowComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ){}

  ngOnInit() {

    // this.route.params.subscribe(({id}) => {
    //   this.emailService.getEmail(id).subscribe(email => {
    //   console.log(email);
    //   });
    // });

    this.route.params
    .pipe(
      switchMap(({ id }) => {
        return this.emailService.getEmail(id);
      })
    )
    .subscribe(email => {
      console.log(email);
    });

  }

  
}
