import { TestBed } from '@angular/core/testing';

import { PagesContainerService } from './pages-container.service';

describe('PagesService', () => {
  let service: PagesContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
