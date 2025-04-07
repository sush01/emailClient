import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'emailClient';
  signedin = false;
  constructor(private authService: AuthService){

  }
  ngOnInit(){
    this.authService.signedin$.subscribe((signedin => {
      this.signedin =signedin;
    }))
  }
}
