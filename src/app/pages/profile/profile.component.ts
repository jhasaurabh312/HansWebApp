import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user : any = [];
  constructor(private http : HttpClient) { }

  ngOnInit() {
 
    const data = new FormData();
    data.append('identity_number',localStorage.getItem('identity_number'));;

    this.http.post('https://partner.hansmatrimony.com/api/getProfile', data ).subscribe((res : any) =>{
      this.user = res;
      console.log(this.user);
    })
  }

}
