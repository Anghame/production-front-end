import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsRapportComponent } from './charts-rapport.component';

describe('ChartsRapportComponent', () => {
  let component: ChartsRapportComponent;
  let fixture: ComponentFixture<ChartsRapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsRapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
