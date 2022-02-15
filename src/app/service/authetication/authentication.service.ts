import { Injectable } from '@angular/core';
import {SignInData} from 'src/app/model/signInData';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   
private readonly mockedUser = new SignInData('dragon@gmail.com','abc');
isAuthenticated = false;


  constructor(private router: Router) { }

  authenticate(signInData:SignInData): boolean{
    if (this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['moviedashboard']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  private checkCredentials(signInData : SignInData) : boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());

  }
  checkEmail(email:string): boolean{
    return email ===  this.mockedUser.getEmail();
  }
  checkPassword(password:string): boolean{
    return password === this.mockedUser.getPassword();
  }

logOut(){
  this.isAuthenticated = false;
  this.router.navigate(['']);
}

}
