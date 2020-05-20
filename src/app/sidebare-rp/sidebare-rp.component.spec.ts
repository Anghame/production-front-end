import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebareRPComponent } from './sidebare-rp.component';

describe('SidebareRPComponent', () => {
  let component: SidebareRPComponent;
  let fixture: ComponentFixture<SidebareRPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebareRPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebareRPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
