import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {
  @Input() type: 'heading' | 'sub-heading' = 'heading'
}
