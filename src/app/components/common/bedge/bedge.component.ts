import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bedge',
  standalone: true,
  imports: [],
  templateUrl: './bedge.component.html',
  styleUrl: './bedge.component.scss'
})
export class BedgeComponent {
@Input() counter:Number | String = 0;

max:Number = 10;
}
