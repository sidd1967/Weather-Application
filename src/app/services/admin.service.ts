import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiURL = "http://localhost:3000/weatherapp"

  constructor(private http: HttpClient) { }

  getAllSensorDetails(){
    let __this = this;
    return __this.http.get(this.apiURL+'/sensor/display').toPromise().then(function (a:any) {
      return a.data;
    })
    
  }
}
