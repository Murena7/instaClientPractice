import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinestoriesblockComponent } from './timelinestoriesblock.component';

describe('TimelinestoriesblockComponent', () => {
  let component: TimelinestoriesblockComponent;
  let fixture: ComponentFixture<TimelinestoriesblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinestoriesblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinestoriesblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
