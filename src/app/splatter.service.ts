import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SplatterService implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error("Method not implemented.");
  }
  private apiURL = 'http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com//api/v1/places';
  private countiesURL = 'http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com//api/v1/places';
  constructor(private httpClient: HttpClient,) { }

  getData(): Observable<object> {
    return this.httpClient.get(this.apiURL);
  }
  
  getPlaces(): Observable<object> {
    return this.httpClient.get(this.countiesURL);
  }
}
