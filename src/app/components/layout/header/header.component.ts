import { Component } from '@angular/core';
import { ImgComponent } from "../../common/img/img.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UserComponent } from "./user/user.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [ImgComponent, NotificationsComponent, UserComponent, RouterModule]
})
export class HeaderComponent {

}
