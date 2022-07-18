import { TestBed } from '@angular/core/testing';

import { ProductProxyService } from './product-proxy.service';

describe('ProductProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductProxyService = TestBed.get(ProductProxyService);
    expect(service).toBeTruthy();
  });
});
