import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousdeploymentComponent } from './continuousdeployment.component';

describe('ContinuousdeploymentComponent', () => {
  let component: ContinuousdeploymentComponent;
  let fixture: ComponentFixture<ContinuousdeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuousdeploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousdeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
