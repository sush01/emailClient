import { RouterModule,Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';


export const routes: Routes = [
  { path: 'signout', component: SignoutComponent},
  { path:'signup', component: SignupComponent},
  { path:'', component: SigninComponent}
  
];
