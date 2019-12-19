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

  public myLocalList = [
"Kinloss",
"Lossiemouth",
"Wick John O Groats Airport",
"Baltasound",
"Lerwick (S. Screen)",
"Fair Isle",
"Foula",
"Aultbea",
"Skye/Lusa",
"Altnaharra Saws",
"Tulloch Bridge",
"Langdon Bay",
"Scilly St Marys",
"Cardinham",
"Isle Of Portland",
"Shoreham",
"Jersey",
"Lough Fea",
"Ballypatrick Forest",
"North Wyke",
"Shobdon Saws",
"Hereford",
"Coleshill",
"Bedford",
"Pembrey Sands",
"Little Rissington (Esaws)",
"High Wycombe",
"Andrewsfield",
"St-Athan",
"Lyneham",
"Farnborough",
"Dundrennan",
"Drumalbin",
"Eskdalemuir",
"Edinburgh/Gogarbank",
"Warcop",
"Redesdale Camp",
"Albemarle",
"Leeming",
"Dishforth Airfield",
"Linton On Ouse",
"Wittering",
"Marham",
"Magilligan",
"Aviemore",
"Tiree",
"Culdrose",
"Dunkeswell Aerodrome",
"Bournemouth Airport",
"Liscombe",
"Larkhill",
"Boscombe Down",
"Charlwood",
"Leuchars",
"Fylingdales",
"Valley",
"Bingley Samos",
"Cranwell",
"Wainfleet",
"Shawbury",
"Cairn Gorm Summit",
"Cairnwell",
"Aberdeen Airport",
"Islay Airport",
"Sule Skerry",
"Yeovilton",
"Woburn",
"Pershore",
"Milford Haven C.B.",
"Filton",
"Shoeburyness",
"Middle Wallop",
"Odiham",
"West Freugh",
"Prestwick Rnas",
"Charterhall",
"St. Bees Head",
"Keswick",
"Carlisle",
"Spadeadam",
"Crosby",
"Waddington",
"Lake Vyrnwy Saws",
"Weybourne",
"Rostherne No 2",
"Rothamsted",
"Aboyne",
"Inverbervie",
"Campbeltown Airport",
"Stornoway",
"Loch Glascarnoch",
"Bealach Na Ba",
"Camborne",
"St Catherines Pt.",
"Thorney Island",
"Herstmonceux West End",
"Castlederg",
"Stonyhurst",
"Trawsgoed",
"Sennybridge",
"Brize Norton",
"Northolt",
"Chivenor",
"Heathrow",
"Glasgow/Bishopton",
"Walney Island",
"Shap",
"Great Dun Fell 2",
"Leek",
"Scampton",
"Aberdaron",
"Exeter Airport",
"South Uist Range",
"Aonach Mor Summit",
"Gravesend-Broadness",
"Manston",
"Mount Batten",
"Glenanne",
"Aberporth",
"Church Lawford",
"Loftus (Samos)",
"Capel Curig",
"Holbeach",
"Kirkwall",
"Kenley",
"Guernsey",
"Belfast International Airport",
"Wattisham",
"Mumbles Head",
"Benson",
"Strathallan",
"Glen Ogle",
"Boulmer",
"Topcliffe",
"Bridlington Mrsc",
"Rhyl",
"Hawarden",
"Watnall",
"Leconfield Sar",
"Donna Nook",
"Coningsby",
"Scarborough",
"Exeter Airport 2"
  ]

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

