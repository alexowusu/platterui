import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'platter';
  static isHidden: boolean = true;
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
  }

}

