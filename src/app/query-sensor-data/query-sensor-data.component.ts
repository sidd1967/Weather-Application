import { Component, OnInit } from '@angular/core';
import { QueryService } from './../services/query.service';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-query-sensor-data',
  templateUrl: './query-sensor-data.component.html',
  styleUrls: ['./query-sensor-data.component.css']
})
export class QuerySensorDataComponent implements OnInit {
  sensorList: any =[];
  metricsList: any =['Temperature', 'Humidity', 'Windspeed'];
  selectedSensors: any = [];
  selectedMetrics: any = [];
  selectedStartDate: any;
  selectedEndDate: any;
  isChecked: boolean = false;
  finalData: any =[];
  isPresentTemp: boolean = false;
  isPresentHumidity: boolean = false;
  isPresentWindSpeed: boolean = false;
  noDataFlag: boolean = false;
  constructor(public queryService: QueryService) { }

  ngOnInit(): void {
    let __this = this;
    //Getting the list of sensors available for user to select
    __this.queryService.getSensorList().then((resp) => {
      __this.sensorList = resp;
    })
  }

  onSubmit(){
  
    let __this = this;
    __this.noDataFlag = false;
    if(this.selectedStartDate == undefined || this.selectedEndDate == undefined){
      let startDate = new Date();
      let endDate = new Date();
      startDate.setDate(startDate.getDate()-7);
      this.selectedStartDate = startDate;
      this.selectedEndDate = endDate;
      console.log(this.selectedStartDate);
      console.log(this.selectedEndDate); 
    }
    let startDate = (this.selectedStartDate.toISOString()).split('T',1)[0];
    let endDate = (this.selectedEndDate.toISOString()).split('T',1)[0];

    //Adding sensorID and Time fields as well to select data from MongoDB
    this.selectedMetrics.push('sensorID','time');
    
    let payload = {
      selectedSensors: this.selectedSensors,
      selectedMetrics: this.selectedMetrics,
      selectedStartDate: startDate,
      selectedEndDate: endDate
    }

    //Checking if fields are included in the query to prep for result display table
    this.isPresentHumidity = this.selectedMetrics.includes('humidity');
    this.isPresentTemp = this.selectedMetrics.includes('temperature');
    this.isPresentWindSpeed = this.selectedMetrics.includes('windspeed');
    
    this.queryService.getQueryData(payload).then((data) => {
      this.finalData = data;
      console.log(data.length);
      
      if(data.length<=0){
        __this.noDataFlag = true;
      }
    })
  }

  checkSensor(event: any, value: any) {
    
    //Sensor Checkbox functions
    if(event.target.checked == true) {
      this.selectedSensors.push(value);
    }
    else if(event.target.checked == false){
      let i = this.selectedSensors.indexOf(value);
      if(i>-1){ this.selectedSensors.splice(i , 1) }
    }
  }
  
  checkMetrics(event: any, value: any) {

    //Metrics Checkbox Functions
    let metric = value.toLowerCase();
    if(event.target.checked == true) {
      this.selectedMetrics.push(metric);
    }
    else if(event.target.checked == false) {
      let i = this.selectedMetrics.indexOf(metric);
      if(i>-1) { this.selectedMetrics.splice(i, 1)}
    }    
  }
}
