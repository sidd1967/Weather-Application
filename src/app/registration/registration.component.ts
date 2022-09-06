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
    this.registerSensorService.registration(this.sensorID, this.country, this.city).subscribe((res) => {
    alert('Registered');
    });
  }
}
