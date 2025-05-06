import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { RouterModule } from '@angular/router';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailIndexComponent } from './email-index/email-index.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HomeComponent,
    RouterModule,
    EmailShowComponent,
    PlaceholderComponent,
    EmailIndexComponent
  ]
})
export class InboxModule { }
