import { TestBed } from '@angular/core/testing';

import { DateFormatService } from './date-parse.service';

describe('DateParseService', () => {
  let service: DateFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
