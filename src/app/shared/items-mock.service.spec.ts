import { TestBed, inject } from '@angular/core/testing';

import { ItemsMockService } from './items-mock.service';

describe('Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsMockService]
    });
  });

  it('should be created', inject([ItemsMockService], (service: ItemsMockService) => {
    expect(service).toBeTruthy();
  }));
});
