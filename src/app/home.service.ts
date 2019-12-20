import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Weather } from './interfaces/weather';

@Injectable({
  providedIn: "root"
})
export class HomeService {
  private apiURL = 'http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com//api/v1/place?name=Carlisle';
  
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<object> {
    return this.httpClient.get(this.apiURL);
  }

  private locationURL:string =
    "http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com//api/v1/place?name=";


  getDataByLocation(name: string): Observable<Weather> {
    return this.httpClient.get<Weather>(this.locationURL + name);
  }

  private notifyUrl: string = "";
}
