import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebareEmComponent } from './sidebare-em.component';

describe('SidebareEmComponent', () => {
  let component: SidebareEmComponent;
  let fixture: ComponentFixture<SidebareEmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebareEmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebareEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
