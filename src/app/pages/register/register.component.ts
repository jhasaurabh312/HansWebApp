import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
 PageOne : FormGroup;
 constructor(private _formBuilder: FormBuilder,  private router: Router) {
   
      this.PageOne = this._formBuilder.group({
         'mail' : [''],
         'pass' : [''],
         'create' : [''],
         'phone' : [''],
         'name' : ['']

      });
  

  }


  ngOnInit(){

  }


  }

