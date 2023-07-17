import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResinCalcComponent } from './resin-calc.component';

describe('ResinCalcComponent', () => {
  let component: ResinCalcComponent;
  let fixture: ComponentFixture<ResinCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResinCalcComponent]
    });
    fixture = TestBed.createComponent(ResinCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
