import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Angular2TokenService } from "angular2-token";
import { Title } from '@angular/platform-browser';
import { NotificationsService } from 'angular4-notifications';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  myPlugins = null;

  user = null;

  passChange = {
    new1: "",
    new2: "",
    old: ""
  };

  constructor(private userService: UserService, public tokenAuthService: Angular2TokenService, private titleService: Title, private notification: NotificationsService) { }

  changePassword(){

    if(this.passChange.new1 != this.passChange.new2){
      this.notification.error("Error", "Passwords don't match");
      return;
    }

    this.tokenAuthService.updatePassword({
      password:             this.passChange.new1,
      passwordConfirmation: this.passChange.new2,
      passwordCurrent:      this.passChange.old,
      resetPasswordToken:   'resetPasswordToken',
    }).subscribe(
      res => {
        this.notification.success("Password changed!", "Your password was updated.");
      },
      error => {
        this.notification.error("Error", error.json().errors.full_messages[0]);
      }
    );

  }

  ngOnInit() {

    this.titleService.setTitle("MO Plugins | Account");

    this.userService.getUserMe().subscribe(
      data => {
        this.user = data.json();
      }
    );

    //this.user = this.tokenAuthService.currentAuthData;

    this.userService.getUserPlugins().subscribe(
      data => {
        this.myPlugins = data.json();
      }
    );
  }

}
