import { TestBed } from '@angular/core/testing';

import { RegisterSensorService } from './register-sensor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('RegisterSensorService', () => {
  let service: RegisterSensorService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterSensorService]
    });
    service = TestBed.inject(RegisterSensorService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register sensor', () => {
    var sensorData = {
      sensorID: "199",
      country: "India",
      city: "Mumbai"
    }
    service
    .registration("199","India", "Mumbai")
    .subscribe((res: any) => {
      expect(res.status).toEqual("success", 'status');
    });
    const req = httpController.expectOne('http://localhost:3000/weatherapp/sensor/register');
    expect(req.request.method).toEqual('POST');

    req.flush({status: "success", response: 200});

  })
});
