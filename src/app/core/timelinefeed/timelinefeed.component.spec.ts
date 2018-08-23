import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinefeedComponent } from './timelinefeed.component';

describe('TimelinefeedComponent', () => {
  let component: TimelinefeedComponent;
  let fixture: ComponentFixture<TimelinefeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinefeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinefeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
