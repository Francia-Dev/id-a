import { TestBed } from '@angular/core/testing';

import { ComunidadeService } from './comunidade.service';

describe('ComunidadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunidadeService = TestBed.get(ComunidadeService);
    expect(service).toBeTruthy();
  });
});
