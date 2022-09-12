import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('AdminService', () => {
  let adminService: AdminService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService]
    });
    adminService = TestBed.inject(AdminService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  it('should be created', () => {
    expect(adminService).toBeTruthy();
  });

  it('should get list of sensors', () => {
    
    adminService
      .getAllSensorDetails()
      .then((data) => expect(data.status).toEqual(200, 'status'));

    const req = httpController.expectOne('http://localhost:3000/weatherapp/sensor/display');
    expect(req.request.method).toEqual('GET');

    req.flush({status: "success", response: 200});
    
  })
});
