import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniuserblockComponent } from './miniuserblock.component';

describe('MiniuserblockComponent', () => {
  let component: MiniuserblockComponent;
  let fixture: ComponentFixture<MiniuserblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniuserblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniuserblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
