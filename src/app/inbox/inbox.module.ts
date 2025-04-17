import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InboxRoutingModule } from './inbox-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HomeComponent
  ]
})
export class InboxModule { }
