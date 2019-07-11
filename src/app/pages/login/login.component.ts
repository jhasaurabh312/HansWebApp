import { Component, OnInit } from '@angular/core';
import { FormControl,  FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails: FormGroup;
  forgotDetails: FormGroup;
  result : any = [];

  constructor( private _formBuilder: FormBuilder, private router: Router, private http:HttpClient) { 
    this.loginDetails = this._formBuilder.group({
      'mail': [''],
      'pass': [''],
    });;

  }  

  ngOnInit() {

  }

   login(){

        const loginData = new FormData();
        loginData.append('email' , this.loginDetails.value.mail);
        loginData.append('password', this.loginDetails.value.pass);

        console.log(this.loginDetails.value.email);
        console.log(this.loginDetails.value.password);
        console.log(loginData);

        this.http.post('https://partner.hansmatrimony.com/api/login', loginData ).subscribe((res:any) => {
          this.result = res;
          console.log(this.result);
          if(this.result.login_status === 'Y'){
            localStorage.setItem('identity_number',this.result.identity_number);
            window.alert("You have logged in successfully !");
            this.router.navigate(['/onboarding']);
          }

        })
   }

}
