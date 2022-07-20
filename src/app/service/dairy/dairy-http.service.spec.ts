import { TestBed } from '@angular/core/testing';

import { DairyHttpService } from './dairy-http.service';

describe('DairyHttpService', () => {
  let service: DairyHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DairyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
