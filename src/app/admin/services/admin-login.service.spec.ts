import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminLoginService } from './admin-login.service';

describe('AdminLoginService', () => {
  let service: AdminLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(AdminLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
