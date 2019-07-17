import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousintegrationComponent } from './continuousintegration.component';

describe('ContinuousintegrationComponent', () => {
  let component: ContinuousintegrationComponent;
  let fixture: ComponentFixture<ContinuousintegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuousintegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
