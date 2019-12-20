import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AverageService {
  private _summaryUrl: string =
    "http://platter-env.yft9tjegpq.eu-west-2.elasticbeanstalk.com/api/v1/summary";
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();


  constructor(private _http: HttpClient) {}

  getSummary(): Observable<object> {
    return this._http.get(this._summaryUrl);
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  
}
