import { Component, OnInit } from '@angular/core';
import { AverageService } from '../services/average.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent implements OnInit {

  public locationData = [];

  searchLocationForm = new FormGroup({
    location_name: new FormControl('')
  });

  constructor(private averageService: AverageService) { }

  public averageData : object = {}

  ngOnInit() {
    this.averageService.getSummary().subscribe(data => {
      this.averageData = data;
      console.log(data)
    })
    console.log("shows from init")
  }

  onSubmit() {    // () are public by default...so no need to specify if public
    // console.log(this.searchProjectForm.value.project_name);
    // this.projectService.getProjectByName(this.searchProjectForm.value.project_name).subscribe(  // always subscribe
    //   data => {   
    //     this.projectList = data;    // store in var for display
    //     console.log(data)   // don't concat with string
    //   }, 
    //   error => { console.log(error); }
    //   )
  }

  search(){
    console.log(this.searchLocationForm.value.location_name)
  }

}
