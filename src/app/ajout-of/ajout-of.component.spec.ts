import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOFComponent } from './ajout-of.component';

describe('AjoutOFComponent', () => {
  let component: AjoutOFComponent;
  let fixture: ComponentFixture<AjoutOFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutOFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
