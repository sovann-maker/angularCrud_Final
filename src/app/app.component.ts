import { Component } from '@angular/core';
import { AuthenticationService } from './service/authetication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCrud';

  constructor(public authenticationService: AuthenticationService){

  }
  logOut (){
    this.authenticationService.logOut();
  }

}
