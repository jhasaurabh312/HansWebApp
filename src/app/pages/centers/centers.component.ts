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
       this.centres[i].profile_photo = 'https://i2.wp.com/pacificmortgageca.com/wp-content/uploads/2017/11/dummyprofilef.jpg?ssl=1';
    })
  }

}
