import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.scss']
})

export class CentersComponent implements OnInit {

  centres : any = [];

  constructor(private http : HttpClient) { }

  ngOnInit() {
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })


    this.http.get('https://partner.hansmatrimony.com/api/viewCentres', {headers : headers}).subscribe((res:any) => {
      this.centres = res;
      console.log(this.centres);

      var l = this.centres.length;
      for(let i=0;i<l;i++)
       this.centres[i].profile_photo = 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png';
    })
  }

}
