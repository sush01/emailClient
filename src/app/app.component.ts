import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emailClient';
  signedin$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService){
    this.signedin$ = this.authService.signedin$;

  }

  ngOnInit(){
    this.authService.checkAuth().subscribe();
  }

}
