import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  imports: [],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {

  constructor(private authService: AuthService){

  }
  ngOnInit(){
    this.authService.signout().subscribe(() => {
      //Navigate the user back to a signin page
    });
  }

}
