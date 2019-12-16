import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiURL = 'http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com/api/v1/place';
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<object> {
    return this.httpClient.get(this.apiURL);
  

  //  constructor() { }
}
}
