import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { EmailIndexComponent } from '../email-index/email-index.component';
import { EmailCreateComponent } from '../email-create/email-create.component';
@Component({
  selector: 'app-home',
  imports: [EmailIndexComponent, RouterModule,  EmailCreateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
