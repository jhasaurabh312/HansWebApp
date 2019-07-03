import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  user_profile: any = [];
  answer: FormGroup;
  show : boolean = false;

  constructor( private _formBuilder: FormBuilder, private router: Router, private http:HttpClient) { 
    this.answer = this._formBuilder.group({
      'ans': [''],
     
    });;
}    

  ngOnInit() {

        // const headers = new HttpHeaders({
        //   'Content-Type': 'application/json',
        // })

        const Data = new FormData();
        Data.append('identity_number' , localStorage.getItem('identity_number'));

        this.http.post('https://partner.hansmatrimony.com/api/getProfile' , Data).subscribe((res : any) => {
          this.user_profile = res;
          console.log(this.user_profile);
        })
  }

  read(){
    document.getElementById('color').style.backgroundColor = "#34b7f1" ;
    document.getElementById('display').innerHTML = this.answer.value.ans;
     
  }

}
