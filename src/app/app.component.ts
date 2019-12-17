// import { ToasterService } from './services/toaster-service.service';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'platter';
  static isHidden: boolean = true;
  data: object = { name: 'dawud'};

  // constructor(private toasterService: ToasterService){
    
  // }
}
