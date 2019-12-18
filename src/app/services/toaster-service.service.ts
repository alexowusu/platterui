import { Injectable } from '@angular/core';

declare var toastr: any;  // spec name for js toaster access

@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  constructor() { }

  Success(title: string, message?: string){
    toastr.success(message, title);
    console.log("works from success")
  }

  Info(title: string, message?: string){
    toastr.info(message, title);
    // console.log("works from info")
  }

  Warning(title: string, message?: string){
    toastr.warning(title, message);
  }

 

  
}
