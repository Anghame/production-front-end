import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmComponent } from './home-em.component';

describe('HomeEmComponent', () => {
  let component: HomeEmComponent;
  let fixture: ComponentFixture<HomeEmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
