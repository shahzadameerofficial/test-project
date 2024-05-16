import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
@Input() modalId:string = 'modal-bs';
@Input() modalTitle:string = 'Modal';
@Output() confirm = new EventEmitter()
}
