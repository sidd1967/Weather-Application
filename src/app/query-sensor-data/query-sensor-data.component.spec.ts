import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerySensorDataComponent } from './query-sensor-data.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuerySensorDataComponent', () => {
  let component: QuerySensorDataComponent;
  let fixture: ComponentFixture<QuerySensorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerySensorDataComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerySensorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
