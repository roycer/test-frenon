import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginArray: Array<string> = [];
    newLogin: any = {};
    model: any = {};
    loading = false;
    returnUrl = 'home';

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService
    ) {}

    ngOnInit() {
    }

    addFieldValue() {
        this.loading = true;
        this.authService.login(this.newLogin.user, this.newLogin.contrasena);
        this.router.navigate([this.returnUrl]);
    }
}
