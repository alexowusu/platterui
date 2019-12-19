// import { ToasterService } from './services/toaster-service.service';
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common'; 
import { LoginComponent } from "./login/login.component"; 
import { HomeService } from './home.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'platter';
  @Input() public isUserLoggedIn: boolean;
  static isHidden: boolean = false;
  data: object ; 
  weather:object;

  public url = 'http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com/api/v1/search';
  public search3 = '';
  public params = { 
    name:this.search3
  };
 
  public selectedAPITempStatic (result) {
    this.search3 = result;
  }
 

  constructor(private service:HomeService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      result => {
          this.weather = result;
          console.log(result);
      },
      error => { console.log(error); }  
    ).unsubscribe;

    this.service.getPlaces().subscribe(
      result => {
          this.data = result['places'];
          console.log(result);
      },
      error => { console.log(error); }  
    ).unsubscribe;
 
    LoginComponent.loggedIn;

  }

}

