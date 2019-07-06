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
  show1 : boolean = true;
  show2 : boolean = false;
  personal: any;
  Data : any;
  Data1 : any;
  response_arr:any=[];
  show_arr:any=[];

  constructor( private _formBuilder: FormBuilder, private router: Router, private http:HttpClient) { 
    this.answer = this._formBuilder.group({
      'ans': [''],
     
    });;
}    

  ngOnInit() {

        // const headers = new HttpHeaders({
        //   'Content-Type': 'application/json',
        // })

        // const Data = new FormData();
        // Data.append('identity_number' , localStorage.getItem('identity_number'));

        // this.http.post('https://partner.hansmatrimony.com/api/getProfile' , Data).subscribe((res : any) => {
        //   this.user_profile = res;
        //   console.log(this.user_profile);
        // })


  }

  read(){
    // document.getElementById('color1').style.backgroundColor = "#34b7f1" ;
    // document.getElementById('display1').innerHTML = this.answer.value.ans;
    this.show_arr.push({'side':1,'data':this.answer.value.ans})
     this.chatRequest();

     
  }

  showProfile(){
        const Data = new FormData();
        Data.append('identity_number' , localStorage.getItem('identity_number'));
        this.show1 = false;
        this.show2 = true;

        this.http.post('https://partner.hansmatrimony.com/api/getRecommendedProfiles' , Data).subscribe((res : any) => {
          this.user_profile = res;
          this.personal = this.user_profile[0].profile;
          console.log(this.personal);   
        })
  }

  chatRequest(){
   
    this.Data = {
      from : "918271853820",
       to : "918271853820",
       event : "INBOX",
       text : this.answer.value.ans ,
    }

    var myJSON = JSON.stringify(this.Data);
    console.log(myJSON);

    const data1 = new FormData();
    data1.append('data',myJSON);

  
     this.http.post(' https://partner.hansmatrimony.com/api/sendMessages' , data1 ).subscribe((res : any) => {
        this.user_profile = res;
        console.log(this.user_profile);
        this.show_arr.push({'side':0,'data':this.user_profile.apiwha_autoreply});
       
     })
     this.revertResponse();
  }  
  
  revertResponse(){
    this.Data1 = {
      from : "918271853820",
      to : "918271853820",
      event : "MESSAGEPROCESSED",
    }

    var myJSON2 = JSON.stringify(this.Data1);
    console.log(myJSON2);

    const data2 = new FormData();
    data2.append('data',myJSON2);
  
    this.http.post(' https://partner.hansmatrimony.com/api/sendMessages' , data2 ).subscribe((res : any) => {
      console.log(res);
    })
  }

}
