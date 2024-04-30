import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/common/button/button.component";
import { BreadcrumbsComponent } from "../../../components/common/breadcrumbs/breadcrumbs.component";

@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    imports: [ButtonComponent, BreadcrumbsComponent]
})
export class SettingsComponent {

}
