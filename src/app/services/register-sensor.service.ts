import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterSensorService {
   
  apiURL = "http://localhost:3000/weatherapp"

  constructor(private http: HttpClient) { }
  registration(sensorID: any, country: any, city: any){
    console.log(sensorID);
    console.log(country);
    console.log(city);
    var sensorData = {
      sensorID: sensorID,
      country: country,
      city: city
    }
    return this.http.post(this.apiURL+'/sensor/register', sensorData);

  }
}
