// import { ToasterService } from './services/toaster-service.service';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoginComponent } from "./login/login.component"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'platter';

  static isHidden: boolean = false;
  data: object = { name: 'dawud'};
  
  ngOnInit() {
    LoginComponent.loggedIn;
  }

}
