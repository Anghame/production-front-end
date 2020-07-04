import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOFComponent } from './update-of.component';

describe('UpdateOFComponent', () => {
  let component: UpdateOFComponent;
  let fixture: ComponentFixture<UpdateOFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
