import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateIHMComponent } from './evaluate-ihm.component';

describe('EvaluateIHMComponent', () => {
  let component: EvaluateIHMComponent;
  let fixture: ComponentFixture<EvaluateIHMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluateIHMComponent]
    });
    fixture = TestBed.createComponent(EvaluateIHMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
