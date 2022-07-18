import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailListItemComponent } from './order-detail-list-item.component';

describe('OrderDetailListItemComponent', () => {
  let component: OrderDetailListItemComponent;
  let fixture: ComponentFixture<OrderDetailListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
