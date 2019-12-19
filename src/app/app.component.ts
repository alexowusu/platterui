import { Component, Input } from "@angular/core";
import { NgIf } from "@angular/common";
import { HomeService } from "./home.service";
import { LoginComponent } from "./login/login.component";
import { FormControl } from "@angular/forms";
import { OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private service: HomeService,
    private _formBuilder: FormBuilder
  ) {}

  title = "platter";
  static isHidden: boolean = false;
  data: object = { name: "dawud" };
  weather: object = {};
  @Input() public isUserLoggedIn: boolean;
  myControl = new FormControl();
  options: string[] = ["Delhi", "Mumbai", "Banglore"];

  ngOnInit() {
    this.service.getData().subscribe(
      result => {
        this.weather = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
    console.log("herreeee" + this.weather);
    LoginComponent.loggedIn;

    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
  }

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: ""
  });

  stateGroups: StateGroup[] = [
    {
      letter: "A",
      names: [
        "Aultbea",
        "Aberporth",
        "Aonach Mor Summit",
        "Aberdaron",
        "Aboyne",
        "Altnaharra Saws",
        "Andrewsfield",
        "Albemarle",
        "Aviemore",
        "Aberdeen Airport"
      ]
    },
    {
      letter: "B",
      names: [
        "Baltasound",
        "Bridlington Mrsc",
        "Boulmer",
        "Benson",
        "Belfast International Airport",
        "Brize Norton",
        "Bealach Na Ba",
        "Bingley Samos",
        "Ballypatrick Forest",
        "Bedford",
        "Bournemouth Airport",
        "Boscombe Down"
      ]
    },
    {
      letter: "C",
      names: [
        "Cardinham",
        "Coningsby",
        "Capel Curig",
        "Church Lawford",
        "Chivenor",
        "Castlederg",
        "Camborne",
        "Campbeltown Airport",
        "Crosby",
        "Carlisle",
        "Charterhall",
        "Cairnwell",
        "Cranwell",
        "Coleshill",
        "Culdrose",
        "Charlwood",
        "Cairn Gorm Summit"
      ]
    },
    {
      letter: "D",
      names: [
        "Dundrennan",
        "Donna Nook",
        "Drumalbin",
        "Dishforth Airfield",
        "Dunkeswell Aerodrome"
      ]
    },
    {
      letter: "E",
      names: [
        "Eskdalemuir",
        "Exeter Airport 2",
        "Edinburgh/Gogarbank",
        "Exeter Airport"
      ]
    },
    {
      letter: "F",
      names: ["Fair Isle", "Foula", "Farnborough", "Fylingdales", "Filton"]
    },
    {
      letter: "G",
      names: [
        "Glasgow/Bishopton",
        "Glen Ogle",
        "Great Dun Fell 2",
        "Gravesend-Broadness",
        "Glenanne",
        "Guernsey"
      ]
    },
    {
      letter: "H",
      names: [
        "Hereford",
        "Hawarden",
        "Holbeach",
        "High Wycombe",
        "Herstmonceux West End",
        "Heathrow"
      ]
    },
    {
      letter: "I",
      names: ["Isle Of Portland", "Inverbervie", "Islay Airport"]
    },
    {
      letter: "J",
      names: ["Jersey"]
    },
    {
      letter: "K",
      names: ["Kinloss", "Keswick", "Kirkwall", "Kenley"]
    },
    {
      letter: "L",
      names: [
        "Lossiemouth",
        "Leconfield Sar",
        "Loftus (Samos)",
        "Leek",
        "Loch Glascarnoch",
        "Lake Vyrnwy Saws",
        "Leuchars",
        "Larkhill",
        "Liscombe",
        "Linton On Ouse",
        "Leeming",
        "Lerwick (S. Screen)",
        "Lyneham",
        "Langdon Bay",
        "Lough Fea",
        "Little Rissington (Esaws)"
      ]
    },
    {
      letter: "M",
      names: [
        "Marham",
        "Mumbles Head",
        "Magilligan",
        "Middle Wallop",
        "Milford Haven C.B.",
        "Manston",
        "Mount Batten"
      ]
    },
    {
      letter: "N",
      names: ["North Wyke", "Northolt"]
    },
    {
      letter: "O",
      names: ["Odiham"]
    },
    {
      letter: "P",
      names: ["Pembrey Sands", "Pershore", "Prestwick Rnas"]
    },
    {
      letter: "R",
      names: ["Redesdale Camp", "Rostherne No 2", "Rothamsted", "Rhyl"]
    },
    {
      letter: "S",
      names: [
        "Skye/Lusa",
        "Scarborough",
        "Strathallan",
        "South Uist Range",
        "Scampton",
        "Shap",
        "Sennybridge",
        "Stonyhurst",
        "St Catherines Pt.",
        "Stornoway",
        "Spadeadam",
        "St. Bees Head",
        "Shoeburyness",
        "Sule Skerry",
        "Scilly St Marys",
        "Shoreham",
        "Shobdon Saws",
        "St-Athan",
        "Shawbury"
      ]
    },
    {
      letter: "T",
      names: [
        "Tulloch Bridge",
        "Tiree",
        "Thorney Island",
        "Trawsgoed",
        "Topcliffe"
      ]
    },
    {
      letter: "U",
      names: [""]
    },
    {
      letter: "V",
      names: ["Valley"]
    },
    {
      letter: "W",
      names: [
        "Wick John O Groats Airport",
        "Watnall",
        "Walney Island",
        "Wattisham",
        "Weybourne",
        "Waddington",
        "Warcop",
        "Wittering",
        "Wainfleet",
        "Woburn",
        "West Freugh"
      ]
    },
    {
      letter: "X",
      names: []
    },
    {
      letter: "Y",
      names: ["Yeovilton"]
    }
  ];

  stateGroupOptions: Observable<StateGroup[]>;

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }
    return this.stateGroups;
  }

}
