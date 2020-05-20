import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffuserNotifComponent } from './diffuser-notif.component';

describe('DiffuserNotifComponent', () => {
  let component: DiffuserNotifComponent;
  let fixture: ComponentFixture<DiffuserNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffuserNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffuserNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
