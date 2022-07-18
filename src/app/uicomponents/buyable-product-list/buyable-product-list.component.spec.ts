import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyableProductListComponent } from './buyable-product-list.component';

describe('BuyableProductListComponent', () => {
  let component: BuyableProductListComponent;
  let fixture: ComponentFixture<BuyableProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyableProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyableProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
