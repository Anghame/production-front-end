import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOfComponent } from './gestion-of.component';

describe('GestionOfComponent', () => {
  let component: GestionOfComponent;
  let fixture: ComponentFixture<GestionOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
