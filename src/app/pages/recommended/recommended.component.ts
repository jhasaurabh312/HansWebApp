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

        
      
  }

}
