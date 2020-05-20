import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRPComponent } from './home-rp.component';

describe('HomeRPComponent', () => {
  let component: HomeRPComponent;
  let fixture: ComponentFixture<HomeRPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
