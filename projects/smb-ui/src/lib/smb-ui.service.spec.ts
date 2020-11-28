import { TestBed } from '@angular/core/testing';

import { SmbUiService } from './smb-ui.service';

describe('SmbUiService', () => {
  let service: SmbUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmbUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
