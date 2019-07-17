import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintDataComponent } from './sprintdata.component';

describe('SprintDataComponent', () => {
  let component: SprintDataComponent;
  let fixture: ComponentFixture<SprintDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
