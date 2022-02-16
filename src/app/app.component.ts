import { MovieModel } from './movie-dashboard/movie.model';
import { Component } from '@angular/core';
import { AuthenticationService } from './service/authetication/authentication.service';
import { catchError, Observable, of, tap } from 'rxjs';

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
search(){}


}
