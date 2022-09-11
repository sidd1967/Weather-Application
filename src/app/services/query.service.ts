import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  apiURL = "http://localhost:3000/weatherapp";
  constructor(private http: HttpClient) { }

  getSensorList() {

    //Api call to display just a list of available sensors to display
    let __this = this;
    return __this.http.get(this.apiURL+'/sensor/display-list').toPromise().then(function (a:any) {
      return a.data;
    })
  }

  getQueryData(payload: any) {

    //Api call to process Query data
    let __this = this;    
    return __this.http.post(this.apiURL+'/sensor/query-data', payload).toPromise().then(function (a:any) {
      return a.data;
    })
  }
}
