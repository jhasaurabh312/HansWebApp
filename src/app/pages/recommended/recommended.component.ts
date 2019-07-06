import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  user_profile: any = [];
  answer: FormGroup;
  personal: any;
  Data : any;
  constructor( private _formBuilder: FormBuilder, private router: Router, private http:HttpClient) { 
    this.answer = this._formBuilder.group({
      'ans': [''],
     
    });;
}    

  ngOnInit() {

        
       this.Data = {
         from : "918271853820",
          to : "918271853820",
          event : "INBOX",
          text : "efergr"
       }

       var myJSON = JSON.stringify(this.Data);
       console.log(myJSON);

       const data1 = new FormData();
       data1.append('data',myJSON);
     
        this.http.post(' https://partner.hansmatrimony.com/api/sendMessages' , data1 ).subscribe((res : any) => {
            this.user_profile = res;
            console.log(this.user_profile);
          })
         this.Data = {
               from : "918271853820",
                to : "918271853820",
                event : "MESSAGEPROCESSED",
         }

         var myJSON = JSON.stringify(this.Data);
         console.log(myJSON);
  
         const data2 = new FormData();
         data2.append('data',myJSON);
       
          this.http.post(' https://partner.hansmatrimony.com/api/sendMessages' , data2 ).subscribe((res : any) => {
           console.log(res);
          })
  }

}
