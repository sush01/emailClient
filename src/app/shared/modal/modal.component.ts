import { Component, ElementRef, OnInit, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Output() dismiss = new EventEmitter<void>();

  constructor(private el: ElementRef){

  }

  ngOnInit() {
      //document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  onDismissClick(){
    this.dismiss.emit();
  }
}
