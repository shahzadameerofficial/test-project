import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/layout/header/header.component";
import { BreadcrumbsComponent } from '../../components/common/breadcrumbs/breadcrumbs.component';
import { ProcessingComponent } from './processing/processing.component';
import { SettingsComponent } from "./settings/settings.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, BreadcrumbsComponent, ProcessingComponent, SettingsComponent]
})
export class HomeComponent {
    locations: string[] = ['My Drive', 'New Processing']
}
