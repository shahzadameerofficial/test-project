import { Component } from '@angular/core';
import { ImgComponent } from "../../common/img/img.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UserComponent } from "./user/user.component";
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../../common/button/button.component";
import { SidebarComponent } from "../../common/sidebar/sidebar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [ImgComponent, NotificationsComponent, UserComponent, RouterModule, ButtonComponent, SidebarComponent]
})
export class HeaderComponent {

}
