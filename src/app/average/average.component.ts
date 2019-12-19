import { Component, OnInit } from '@angular/core';
import { AverageService } from '../services/average.service';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent implements OnInit {

  constructor(private averageService: AverageService) { }

  public averageData : object = {}

  ngOnInit() {
    this.averageService.getSummary().subscribe(data => {
      this.averageData = data;
      console.log(data)
    })
    console.log("shows from init")
  }

}
