import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateIhmListComponent } from './evaluate-ihm-list.component';

describe('EvaluateIhmListComponent', () => {
  let component: EvaluateIhmListComponent;
  let fixture: ComponentFixture<EvaluateIhmListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluateIhmListComponent]
    });
    fixture = TestBed.createComponent(EvaluateIhmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
