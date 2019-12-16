import { Component, OnInit } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  constructor() { }


  ngOnInit() {
     this.toHide();
  }
toHide(){
 AppComponent.isHidden = true;
}
}
