import { RouterModule,Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'signout', component: SignoutComponent},
  { path:'signup', component: SignupComponent},
  { path:'', component: SigninComponent},
  { path:'inbox', 
    canMatch: [authGuard],
    loadChildren:() =>
    import('./inbox/inbox.module').then((mod) => mod.InboxModule),}
  
];
