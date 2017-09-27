import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  formGroup: FormGroup;
  firstName:AbstractControl;
  lastName:AbstractControl;
  userName:AbstractControl;
  password:AbstractControl;
  email:AbstractControl;
  mobileNumber:AbstractControl;
  confirmPassword:AbstractControl;
  
  
  constructor(fb:FormBuilder) { 
    this.formGroup=fb.group({
      "firstName":['',Validators.required],
      "lastName":['',Validators.required],
      "userName":['',Validators.required],
      "email" : ['',Validators.compose([Validators.required,Validators.email,this.emailValidator,Validators.minLength(8),Validators.maxLength(40)])],
      "mobileNumber" : ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(14),Validators.pattern('^[0-9]+$')])],
      "password":['',Validators.compose([Validators.required])],
      "confirmpassword":['',Validators.compose([Validators.required])]
    });
    this.firstName=this.formGroup.controls['firstName'];
    this.lastName=this.formGroup.controls['lastName'];
    this.userName=this.formGroup.controls['userName'];
    this.email=this.formGroup.controls['email'];
    this.mobileNumber=this.formGroup.controls['mobileNumber'];
    this.password=this.formGroup.controls['password'];
    this.confirmPassword=this.formGroup.controls['confirmPassword'];
  }

  onLogin(value):any{
    console.log(value);
  }

  emailValidator(control: FormControl): { [s: string]: boolean }  
      { 
     if (!control.value.match(/accenture.com$/))  
     { 
       return {invalidSku: true}; 
      } 
    }

    
  ngOnInit() {
    
  }

}
