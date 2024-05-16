import { Component } from '@angular/core';
import { ButtonComponent } from "../../../common/button/button.component";
import { BedgeComponent } from "../../../common/bedge/bedge.component";

@Component({
    selector: 'app-notifications',
    standalone: true,
    templateUrl: './notifications.component.html',
    styleUrl: './notifications.component.scss',
    imports: [ButtonComponent, BedgeComponent]
})
export class NotificationsComponent {

}
