import {Component, EventEmitter,Input,Output,OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'stock-data',
  templateUrl: './stockData.component.html',
  styleUrls: ['./stockData.component.scss']
})
export class StockData implements OnInit {
  apiResponses: Observable<ApiResponse>;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  /**
   * search
inputDate:String   */
  public search( inputDate:String) {
     const baseUrl = "https://jsonmock.hackerrank.com/api/stocks";
     //var url = baseUrl + inputDate;
     const params = new HttpParams().set("date",inputDate.toString());
     console.log("Params = " + params);
     this.apiResponses = this.http.get<ApiResponse>(baseUrl,{params});
     console.log(this.apiResponses);
     
  }
}

interface Data {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}



interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
}


