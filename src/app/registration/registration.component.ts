import { Component, OnInit } from '@angular/core';
import { RegisterSensorService } from './../services/register-sensor.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  sensorID = "";
  country="";
  city="";
  constructor(
    public registerSensorService: RegisterSensorService
  ) { }

  ngOnInit(): void {
  }

  formSubmit() {
    //Function to Register Sensors
    if(this.sensorID!="" && this.country!="" && this.city!=""){
      this.registerSensorService.registration(this.sensorID, this.country, this.city)
      .subscribe((res) =>  alert('Registered'),
                 (err) =>  alert(err)
      )
    }
    else {
      alert('Please Fill in all the Fields to Register')
    }
  }
}
