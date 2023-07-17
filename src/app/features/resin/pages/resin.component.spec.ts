import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResinComponent } from './resin.component';

describe('ResinComponent', () => {
  let component: ResinComponent;
  let fixture: ComponentFixture<ResinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResinComponent]
    });
    fixture = TestBed.createComponent(ResinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
