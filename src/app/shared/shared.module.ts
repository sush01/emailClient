import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule
  ],
  exports: [InputComponent]
})
export class SharedModule { }
