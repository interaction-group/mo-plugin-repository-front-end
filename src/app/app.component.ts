import { Component, ViewChild } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { UrlService } from "../services/url.service";
import { AuthDialogComponent } from "./auth-dialog/auth-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isCollapsed: boolean = true;

  title = 'app';

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  onExpanded(event): void {

  }

  onCollapsed(event): void {

  }

  presentAuthDialog(mode?: 'login'| 'register'){
    this.authDialog.openDialog(mode);
  }

  constructor(public tokenAuthService: Angular2TokenService, private urlService: UrlService){

/*
    this.authToken.init({
      apiBase: this.urlService.baseUrl
    });


    this.authToken.signIn({email: "aa@gmail.com", password: "12345678"}).subscribe(

        res => {

          console.log('auth response:', res);
          console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
          console.log('auth response body:', res.json()); //log the response body to show the user
        },

        err => {
          console.error('auth error:', err);
        }
    );
*/

  }


}
