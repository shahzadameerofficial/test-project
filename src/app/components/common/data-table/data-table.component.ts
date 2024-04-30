import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-data-table',
    standalone: true,
    templateUrl: './data-table.component.html',
    styleUrl: './data-table.component.scss',
    imports: [ButtonComponent]
})
export class DataTableComponent {
@Input() data:any[] = []
}
