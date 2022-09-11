import { TestBed } from '@angular/core/testing';

import { RegisterSensorService } from './register-sensor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterSensorService', () => {
  let service: RegisterSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegisterSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
