import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  private apiURL = 'http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com//api/v1/place?name=Carlisle';
  
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<object> {
    return this.httpClient.get<object>(this.apiURL);
    
  
  //  constructor() { }
}

}

