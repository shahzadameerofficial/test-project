import { Component } from '@angular/core';
import { ButtonComponent } from "../../../common/button/button.component";

@Component({
    selector: 'app-notifications',
    standalone: true,
    templateUrl: './notifications.component.html',
    styleUrl: './notifications.component.scss',
    imports: [ButtonComponent]
})
export class NotificationsComponent {

}
