import { Component, OnInit } from '@angular/core';
import { AdminService } from './../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(public adminService: AdminService) { }
  sensorData: any = [];
  sensorMetricData: any = [];
  selectedSensor: any;

  ngOnInit(): void {

    //Getting Sensor Details to load up the Admin Dashboard
    let __this = this;
    this.adminService.getAllSensorDetails().then((data: any) => {
      __this.sensorData = data;
    })
  }

  getSensorMetrics(e: any) {

    //Function to get Metrics Data
    let __this = this;
    __this.selectedSensor = e;
    this.adminService.getSensorMetrics(e).then((data: any) => {
      __this.sensorMetricData = data;
    })
  }

}
