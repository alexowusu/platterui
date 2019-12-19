import { Component, OnInit } from "@angular/core";
import { templateSourceUrl } from "@angular/compiler";
import { AppComponent } from "../app.component";
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from "angularx-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  static loggedIn: boolean;

  constructor(private authService: AuthService) {}
  
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = user != null;
      console.log(this.user);
    });
  }
  toHide() {
    AppComponent.isHidden = true;
  }
}
