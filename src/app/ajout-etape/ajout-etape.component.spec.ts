import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEtapeComponent } from './ajout-etape.component';

describe('AjoutEtapeComponent', () => {
  let component: AjoutEtapeComponent;
  let fixture: ComponentFixture<AjoutEtapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutEtapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
