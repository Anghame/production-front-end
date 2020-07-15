import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEtapeComponent } from './gestion-etape.component';

describe('GestionEtapeComponent', () => {
  let component: GestionEtapeComponent;
  let fixture: ComponentFixture<GestionEtapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEtapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
