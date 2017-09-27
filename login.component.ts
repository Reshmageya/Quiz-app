import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl,Validators,FormControl } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup;
  userName:AbstractControl;
  password:AbstractControl;
  message: string;
  showHide:boolean;
  hideDiv:boolean;
  constructor(fb:FormBuilder,private authenticationService:AuthenticationService) { 
    this.formGroup=fb.group({
      "userName":['',Validators.required],
      "password":['',Validators.required],
      
    });
    this.userName=this.formGroup.controls['userName'];
    this.password=this.formGroup.controls['password'];
    this.message='';
  }

  login(userName: string, password: string): boolean {
    this.message = '';
    
    if (!this.authenticationService.login(userName, password)) {
      this.message = 'Incorrect credentials.';
      console.log("not valid user");
      console.log(this.message);
      setTimeout(function(){
        this.message = '';
      }.bind(this), 2500);
      this.showHide=true;
    }
    this.hideDiv=true;
    return false;
  }

  logout(): boolean {
    this.authenticationService.logout();
    return false;
  }

  ngOnInit() {
  }

}
