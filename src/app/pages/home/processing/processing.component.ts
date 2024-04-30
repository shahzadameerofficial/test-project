import { Component } from '@angular/core';
import { TypographyComponent } from '../../../components/common/typography/typography.component';
import { ButtonComponent } from "../../../components/common/button/button.component";
import { DataTableComponent } from "../../../components/common/data-table/data-table.component";

@Component({
    selector: 'app-processing',
    standalone: true,
    templateUrl: './processing.component.html',
    styleUrl: './processing.component.scss',
    imports: [TypographyComponent, ButtonComponent, DataTableComponent]
})
export class ProcessingComponent {

}
