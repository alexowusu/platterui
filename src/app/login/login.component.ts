import { Component, OnInit } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { AppComponent } from '../app.component';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  user: SocialUser;
  loggedIn: boolean;
  static loggedIn: boolean;
  returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute,
   private router: Router) { }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  signOut(): void {
    this.authService.signOut();
  }
  public onLoginClick(){
    this.router.navigate(['./home']);
}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
toHide(){
 AppComponent.isHidden = true;
}
}
