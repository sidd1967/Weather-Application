import { TestBed } from '@angular/core/testing';

import { QueryService } from './query.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QueryService', () => {
  let service: QueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({      
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(QueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
