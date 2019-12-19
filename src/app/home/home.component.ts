import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { LoginComponent } from "../login/login.component";
import { HomeService } from "../home.service";
import { ToasterServiceService } from "../services/toaster-service.service";
import { AverageComponent } from '../average/average.component';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  mock: object = {
    elevation: "204.0",
    locationId: "3660",
    latitude: "51.68",
    longitude: "-0.802",
    name: "High Wycombe",
    county: "Buckinghamshire",
    periods: [
      {
        timestamp: "2019-12-17T00:00:00Z",
        reading: {
          temperature: "6",
          feelsGoodTemp: "4",
          humidity: "98",
          MaxUVIndex: "0",
          precipitationProb: "50",
          visibility: "MO",
          weatherType: "5",
          windDirection: "ENE",
          windGust: "7",
          windSpeed: "2"
        }
      },
      {
        timestamp: "2019-12-17T03:00:00Z",
        reading: {
          temperature: "6",
          feelsGoodTemp: "3",
          humidity: "98",
          MaxUVIndex: "0",
          precipitationProb: "58",
          visibility: "MO",
          weatherType: "12",
          windDirection: "NNE",
          windGust: "7",
          windSpeed: "4"
        }
      },
      {
        timestamp: "2019-12-17T06:00:00Z",
        reading: {
          temperature: "5",
          feelsGoodTemp: "3",
          humidity: "98",
          MaxUVIndex: "0",
          precipitationProb: "57",
          visibility: "PO",
          weatherType: "12",
          windDirection: "NNE",
          windGust: "9",
          windSpeed: "4"
        }
      },
      {
        timestamp: "2019-12-17T09:00:00Z",
        reading: {
          temperature: "5",
          feelsGoodTemp: "3",
          humidity: "98",
          MaxUVIndex: "1",
          precipitationProb: "45",
          visibility: "MO",
          weatherType: "12",
          windDirection: "NNW",
          windGust: "9",
          windSpeed: "4"
        }
      },
      {
        timestamp: "2019-12-17T12:00:00Z",
        reading: {
          temperature: "5",
          feelsGoodTemp: "3",
          humidity: "96",
          MaxUVIndex: "1",
          precipitationProb: "49",
          visibility: "PO",
          weatherType: "12",
          windDirection: "NW",
          windGust: "11",
          windSpeed: "4"
        }
      },
      {
        timestamp: "2019-12-17T15:00:00Z",
        reading: {
          temperature: "6",
          feelsGoodTemp: "3",
          humidity: "94",
          MaxUVIndex: "1",
          precipitationProb: "14",
          visibility: "GO",
          weatherType: "7",
          windDirection: "W",
          windGust: "9",
          windSpeed: "4"
        }
      },
      {
        timestamp: "2019-12-17T18:00:00Z",
        reading: {
          temperature: "4",
          feelsGoodTemp: "1",
          humidity: "97",
          MaxUVIndex: "0",
          precipitationProb: "12",
          visibility: "MO",
          weatherType: "7",
          windDirection: "SW",
          windGust: "11",
          windSpeed: "4"
        }
      },
      {
        timestamp: "2019-12-17T21:00:00Z",
        reading: {
          temperature: "4",
          feelsGoodTemp: "0",
          humidity: "96",
          MaxUVIndex: "0",
          precipitationProb: "5",
          visibility: "GO",
          weatherType: "2",
          windDirection: "SW",
          windGust: "13",
          windSpeed: "4"
        }
      }
    ],
    dataDate: "2019-12-16T13:00:00Z",
    country: "ENGLAND",
    summary: { temp: 5.125, humidity: 96.875, windSpeed: 3.75 }
  };

  // location = "Pembrey Sands"
  // this.weather["name"]


  constructor(
    private service: HomeService,
    private toasterService: ToasterServiceService,
    private route: ActivatedRoute
    // private avg: AverageComponent
  ) {}

  weather: object = {};
  name: string;
  weatherStatus: string;
  t = this.mock['name'];
  // msg: string = "Raining @ " + this.name;
  // map: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.553793177251!2d-0.23769099999999996!3d5.6326808999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9954d603e5b3%3A0xd24eb41c04c54f63!2sturntabl!5e0!3m2!1sen!2sgh!4v1576499402655!5m2!1sen!2sgh"
  // mapUrl = "https://maps.google.com/maps?q=achimota&t=k&z=13&ie=UTF8&iwloc=&output=embed";
  loc: string = "accra";
  avg: AverageComponent
  weatherNameParam;


  ngOnInit() {
    this.service.getDataByLocation(this.route.snapshot.params['id']).subscribe(
      result => {
        this.weather = result;
        console.log(result);

        this.name = this.weather["name"];
        // this.weatherStatus = this.weather["elevation"]
        // this.weatherStatus = this.mock["periods[0]"["reading"["weatherType"]]];
        // this.weatherStatus = this.weather[name];
        // console.log("name inside: "+  this.name);
        console.log("weather status: " + this.t);
        this.Info(this.weatherStatus + " " + this.name);
        // console.log("from home,......")

        this.weatherNameParam = this.route.snapshot.params['id'];
        console.log(this.weatherNameParam)

      },
      error => {
        console.log(error);
      }
    );
    this.hide();
    LoginComponent.loggedIn;

    // console.log("show for info");
    // console.log(this.name)
    // this.Info(this.name);
    console.log("oover heeeere" + this.avg.locSearchFormValue)

    // this.service.getDataByLocation();
    // this.route.paramMap.subscribe((params: ParamMap) => {    // alt
    //   this.weatherNameParam = parseInt(params.get('id')); // grabs the dynamic path para values, string by default 
    //   console.log(this.weatherNameParam)
    // });


    // this.weatherNameParam = this.route.snapshot.params['id'];
    // console.log("from home,......")
  }

  private hide() {
    AppComponent.isHidden = false;
  }

  Info(msg: string) {
    this.toasterService.Info("Alert", msg);
  }

  // Success(){
  //   this.toasterService.Success("title", "message");
  // }

  showConsole() {
    console.log(this.name);
  }
}
