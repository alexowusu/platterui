import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeService } from '../home.service';
import { ToasterServiceService } from '../services/toaster-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weather:object  = {}
  // mock: object = 
  // {"elevation":"204.0",
  // "locationId":"3660","latitude":"51.68",
  // "longitude":"-0.802","name":"High Wycombe","county":"Buckinghamshire",
  // "periods":[{
  //   "timestamp":"2019-12-17T00:00:00Z",
  //   "reading":{"temperature":"6","feelsGoodTemp":"4","humidity":"98","MaxUVIndex":"0","precipitationProb":"50","visibility":"MO",
  //   "weatherType":"5","windDirection":"ENE","windGust":"7","windSpeed":"2"}},
  //     {"timestamp":"2019-12-17T03:00:00Z",
  //     "reading":{"temperature":"6","feelsGoodTemp":"3","humidity":"98","MaxUVIndex":"0","precipitationProb":"58","visibility":"MO","weatherType":"12","windDirection":"NNE","windGust":"7","windSpeed":"4"}},{"timestamp":"2019-12-17T06:00:00Z","reading":{"temperature":"5","feelsGoodTemp":"3","humidity":"98","MaxUVIndex":"0","precipitationProb":"57","visibility":"PO","weatherType":"12","windDirection":"NNE","windGust":"9","windSpeed":"4"}},
  //     {"timestamp":"2019-12-17T09:00:00Z","reading":{"temperature":"5","feelsGoodTemp":"3","humidity":"98","MaxUVIndex":"1","precipitationProb":"45","visibility":"MO","weatherType":"12","windDirection":"NNW","windGust":"9","windSpeed":"4"}},{"timestamp":"2019-12-17T12:00:00Z","reading":{"temperature":"5","feelsGoodTemp":"3","humidity":"96","MaxUVIndex":"1","precipitationProb":"49","visibility":"PO","weatherType":"12","windDirection":"NW","windGust":"11","windSpeed":"4"}},{"timestamp":"2019-12-17T15:00:00Z","reading":{"temperature":"6","feelsGoodTemp":"3","humidity":"94","MaxUVIndex":"1","precipitationProb":"14","visibility":"GO","weatherType":"7","windDirection":"W","windGust":"9","windSpeed":"4"}},{"timestamp":"2019-12-17T18:00:00Z","reading":{"temperature":"4","feelsGoodTemp":"1","humidity":"97","MaxUVIndex":"0","precipitationProb":"12","visibility":"MO","weatherType":"7","windDirection":"SW","windGust":"11","windSpeed":"4"}},{"timestamp":"2019-12-17T21:00:00Z","reading":{"temperature":"4","feelsGoodTemp":"0","humidity":"96","MaxUVIndex":"0","precipitationProb":"5","visibility":"GO","weatherType":"2","windDirection":"SW","windGust":"13","windSpeed":"4"}}],"dataDate":"2019-12-16T13:00:00Z","country":"ENGLAND","summary":{"temp":5.125,"humidity":96.875,"windSpeed":3.75}}

      // location = "Pembrey Sands"
  mapUrl = "https://maps.google.com/maps?q="+ this.weather["name"] +"&t=k&z=13&ie=UTF8&iwloc=&output=embed";

  constructor(private service:HomeService, private toasterService: ToasterServiceService) { }

  name:string;
  weatherStatus: string;
  msg:string = "Raining @ " + name;

  ngOnInit() {
    this.service.getData().subscribe(
      result => {
          this.weather = result;
          console.log(result);
          this.name = this.weather["name"];
          // this.weatherStatus = this.weather["periods[0]"["reading"["weatherType"]]];
          // this.weatherStatus = this.weather[name];
          console.log("herreeee " + this.name); 
      },
      error => { console.log(error); }
    );

    this.Info(this.msg);
  }


  Info(msg: string){
    this.toasterService.Info("Info", msg);
  }

  // Success(){
  //   this.toasterService.Success("title", "message");
  // }


}
