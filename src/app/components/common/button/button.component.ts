import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() icon: string | undefined;
@Input() position: 'left' | 'right' = 'left';
@Input() title: string = '';
@Input() class: string = '';
@Input() variant: string = '';
@Input() style:object = {};
@Input() bedge: boolean = false;
@Input() bedgeText: string | number = ''
}
