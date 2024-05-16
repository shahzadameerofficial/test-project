import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/common/button/button.component";
import { BreadcrumbsComponent } from "../../../components/common/breadcrumbs/breadcrumbs.component";
import { MultipleInputComponent } from "../../../components/common/multiple-input/multiple-input.component";
import { ModalComponent } from "../../../components/common/modal/modal.component";

@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    imports: [ButtonComponent, BreadcrumbsComponent, MultipleInputComponent, ModalComponent]
})
export class SettingsComponent {

}
