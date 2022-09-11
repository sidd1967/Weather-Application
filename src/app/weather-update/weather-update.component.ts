import { Component, OnInit } from '@angular/core';
import { AdminService } from './../services/admin.service'
@Component({
  selector: 'app-weather-update',
  templateUrl: './weather-update.component.html',
  styleUrls: ['./weather-update.component.css']
})
export class WeatherUpdateComponent implements OnInit {
  sensorID: any;
  constructor(public adminService: AdminService) { }
  metricData: any = [];
  noDataFlag: boolean = false;
  ngOnInit(): void {
  }

  getWeatherUpdate() {

    //Function to get latest (or just to fetch) data from API to feedn into our Weather App
    let __this = this;
    __this.noDataFlag = false;
    __this.adminService.getSensorMetrics(this.sensorID).then((data) => {
      __this.metricData = data;

      if(data.length<=0){
        __this.noDataFlag = true;
      }
    })
  }

}
