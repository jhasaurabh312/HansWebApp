import { Component, OnInit } from '@angular/core';
// import { NgxNotificationService } from 'ngx-notification';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails: FormGroup;
  forgotDetails: FormGroup;
  fdorgot:Boolean = false;
  login:Boolean = true;
  mverify = false;
  sucess = false;
  forgotpasswordEmail;

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  // forgotpasswordEmail;
  // constructor(private socialAuth: SocialLoginService, private _formBuilder: FormBuilder,private authService : AuthService,
  //    private ngxNotificationService: NgxNotificationService , private router: Router) { 
  //   this.loginDetails = this._formBuilder.group({
  //     'email': ['', Validators.compose([Validators.required, Validators.email])],
  //     'password': ['', Validators.compose([Validators.required])],
  //   });
  //   this.forgotDetails = this._formBuilder.group({
  //     'email': ['', Validators.compose([Validators.required, Validators.email])],
  //   });
  // }
 
forgot() {
this.login = false;this.fdorgot = true;

}

// forgotPassword(){
//   const forgotData = new FormData();
//   forgotData.append('email' , this.forgotDetails.value.email );
//   this.authService.reset(forgotData).subscribe((res:any) => {
//     if(res.resetPassword === 'N'){
//       this.ngxNotificationService.sendMessage('Email  doesnot exist!', 'danger', 'top-right');
//     } else {
//       this.fdorgot = false;
//       this.sucess = true;
//     };
//   });
// }
// submitLogin(){
//   const loginData = new FormData();
//   loginData.append('email' , this.loginDetails.value.email );
//   loginData.append('password', this.loginDetails.value.password);
//   this.authService.login(loginData).subscribe((suc:any) => {
//     if(suc.login_status === 'N'){
//       localStorage.setItem('loggedIn','false');
//       this.ngxNotificationService.sendMessage('Email or password is Incorrect!', 'danger', 'top-right');
//     } else {
//       localStorage.setItem('identityNumber',suc.identity_number);
//       console.log('suc',suc);
//       console.log('iden',suc.identityNumber);
//       localStorage.setItem('loggedIn','true');
//       document.getElementById('closeModal').click();
//      this.router.navigateByUrl('dashboard');
//     }
//   },err =>{
//     this.ngxNotificationService.sendMessage('Something went wrong please try again after Sometime', 'danger', 'top-right');
//   });
  
// }
}
