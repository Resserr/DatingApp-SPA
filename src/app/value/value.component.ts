import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  url: any = 'http://localhost:5000/api/Values';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(): void {
    this.values = this.http.get(this.url).subscribe(responce => this.values = responce , err => console.log(err));
  }

}
