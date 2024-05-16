import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() icon: string | undefined;
@Input() position: 'left' | 'right' = 'left';
@Input() title: string = '';
@Input() styleClass: string = '';
@Input() variant: string = '';
@Input() style: object = {};
@Input() bedge: boolean = false;
@Input() bedgeText: string | number = ''
@Input() dataBsToggle: string = '';
@Input() dataBsTarget: string = '';
@Input() disabled: boolean | string = false;
@Output() change = new EventEmitter<any>();

handleClick(){
  this.change.emit()
}
}
