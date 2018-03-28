import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProvideListComponent } from './app-provide-list.component';

describe('AppProvideListComponent', () => {
  let component: AppProvideListComponent;
  let fixture: ComponentFixture<AppProvideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProvideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProvideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
