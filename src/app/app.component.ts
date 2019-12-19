import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HomeService } from './home.service';
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

  weather:object  = {}

  constructor(private service:HomeService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      result => {
          this.weather = result;
          console.log(result);
      },
      error => { console.log(error); }
      
    );
    console.log("herreeee" + this.weather);
    LoginComponent.loggedIn;

  }

}

