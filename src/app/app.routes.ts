import { RouterModule,Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


export const routes: Routes = [
  { path:'signup', component: SignupComponent},
  { path:'', component: SigninComponent}
];
