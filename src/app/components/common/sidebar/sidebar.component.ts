import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() sidebarId:string = 'sidebar-bs';
  @Input() sidebarClasses:string = '';
  @Input() sidebarPosition:string = 'offcanvas-start';
  @Input() sidebarTitle:string = 'Sidebar';

}
