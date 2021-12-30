import { Component } from '@angular/core';
import { LogupdateService } from './logupdate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'darkwhiteapp';

  constructor(private logupdateService : LogupdateService){

  }
  ngOnInit(){

  }
}
