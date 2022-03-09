import { TestBed } from '@angular/core/testing';

import { EmailRenderService } from './email-render.service';

describe('EmailRenderService', () => {
  let service: EmailRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
