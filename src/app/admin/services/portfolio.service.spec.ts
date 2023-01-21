import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
