import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterSeuilComponent } from './consulter-seuil.component';

describe('ConsulterSeuilComponent', () => {
  let component: ConsulterSeuilComponent;
  let fixture: ComponentFixture<ConsulterSeuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterSeuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterSeuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
