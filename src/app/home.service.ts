import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Weather}from './weather'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: "root"
})
export class HomeService {
  private apiURL = 'http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com//api/v1/place?name=Carlisle';
  
  constructor(private httpClient: HttpClient) {}


  getData(): Observable<Weather> {
    return this.httpClient.get<Weather>(this.apiURL);
    
  
  //  constructor() { }
}

  private locationURL:string =
    "http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com//api/v1/place?name=";


  getDataByLocation(name: string): Observable<Object> {
    return this.httpClient.get<Object>(this.locationURL + name);
  }

  private notifyUrl: string = "";
}
