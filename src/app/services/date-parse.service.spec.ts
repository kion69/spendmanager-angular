import { TestBed } from '@angular/core/testing';

import { DateParseService } from './date-parse.service';

describe('DateParseService', () => {
  let service: DateParseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateParseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
