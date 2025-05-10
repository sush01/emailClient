import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { EmailIndexComponent } from '../email-index/email-index.component';
import { EmailShowComponent } from '../email-show/email-show.component';
import { ModalComponent } from "../../shared/modal/modal.component";
@Component({
  selector: 'app-home',
  imports: [EmailIndexComponent, RouterModule, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
