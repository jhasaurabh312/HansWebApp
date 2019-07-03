import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  user_profile: any = [];
  answer: FormGroup;

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

        this.http.post('https://partner.hansmatrimony.com/api/getRecommendedProfiles' , Data).subscribe((res : any) => {
          this.user_profile = res;
          console.log(this.user_profile);
        })
  }

}
