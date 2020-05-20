import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOrdreFabComponent } from './gestion-ordre-fab.component';

describe('GestionOrdreFabComponent', () => {
  let component: GestionOrdreFabComponent;
  let fixture: ComponentFixture<GestionOrdreFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionOrdreFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionOrdreFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
