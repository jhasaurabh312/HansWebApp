import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: any = [];

  constructor(private http : HttpClient) { }

  ngOnInit() {

     const data = new FormData();
     data.append('identity_number',localStorage.getItem('identity_number'));
     
     this.http.post('https://partner.hansmatrimony.com/api/history',data).subscribe((res : any) => {
       this.history = res;
       console.log(this.history);
     })

  }



}
