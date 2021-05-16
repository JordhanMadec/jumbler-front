import { AutService } from './auth.service';
import { TestBed } from '@angular/core/testing';

describe('AutService', () => {
  let service: AutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
