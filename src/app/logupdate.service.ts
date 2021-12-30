import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogupdateService {

  constructor(private swUpdate: SwUpdate) { 
    console.log("LogupdateService constructor ")
    this.init()
  }

  init(){
    console.log("LogupdateService ngOnInit ")
    if(this.swUpdate.isEnabled){
      console.log("service worker is enabled")

      this.swUpdate.available.subscribe(event => {
        console.log('available - current version is', event.current);
        console.log('available - available version is', event.available);
      });

      this.swUpdate.activated.subscribe(event => {
        console.log('activated - old version was', event.previous);
        console.log('activated - new version is', event.current);
      });

    }
    else{
      console.log("service worker is not enabled")
    }

   
  }
}
