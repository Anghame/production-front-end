import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinirSeuilComponent } from './definir-seuil.component';

describe('DefinirSeuilComponent', () => {
  let component: DefinirSeuilComponent;
  let fixture: ComponentFixture<DefinirSeuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinirSeuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinirSeuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
