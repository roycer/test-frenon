import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'cat-top-bar',
    templateUrl: './top-bar.component.html'
})
export class TopBarComponent {
    constructor(private authService: AuthService) {}

    logout(){
        this.authService.logout();
    }
}
