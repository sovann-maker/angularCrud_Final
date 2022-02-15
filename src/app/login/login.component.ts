import { SignInData } from './../model/signInData';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authetication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isFormInvalid = false;
  areCredentailsInvalid =false;
  
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){ 
    if (!signInForm.valid){
      this.isFormInvalid = true;
      this.areCredentailsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);
    console.log(signInForm.value);
    
  }

  private checkCredentials(signInForm: NgForm){
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    if (!this.authenticationService.authenticate(signInData)){
      this.isFormInvalid = false;
      this.areCredentailsInvalid = true;

    }
  }
}
