import { TestBed } from '@angular/core/testing';

import { RegisterSensorService } from './register-sensor.service';

describe('RegisterSensorService', () => {
  let service: RegisterSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
