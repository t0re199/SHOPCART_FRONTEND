import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReporterComponent } from './order-reporter.component';

describe('OrderReporterComponent', () => {
  let component: OrderReporterComponent;
  let fixture: ComponentFixture<OrderReporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
