import { TestBed } from '@angular/core/testing';

import { MenuCommunicationService } from './menu-communication.service';

describe('MenuCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuCommunicationService = TestBed.get(MenuCommunicationService);
    expect(service).toBeTruthy();
  });
});
