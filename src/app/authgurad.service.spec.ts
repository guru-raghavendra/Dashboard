import { TestBed } from '@angular/core/testing';

import { Authgurad } from './authgurad.service';

describe('AuthguradService', () => {
  let service: Authgurad;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authgurad);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
