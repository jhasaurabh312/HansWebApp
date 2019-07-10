import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-two',
  templateUrl: './register-two.component.html',
  styleUrls: ['./register-two.component.scss']
})
export class RegisterTwoComponent implements OnInit {

  PageTwo : FormGroup;
  constructor(private _formBuilder: FormBuilder,  private router: Router) {
    
       this.PageTwo= this._formBuilder.group({
          'age' : [''],
          'height' : [''],
          'weight' : [''],
          'marital_status' : [''],
          'manglik_status' : [''],
          'caste' : ['']
       });
   
 
   }

  ngOnInit() {
    
  }



}
