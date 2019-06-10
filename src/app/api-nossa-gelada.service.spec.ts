import { TestBed } from '@angular/core/testing';

import { ApiNossaGeladaService } from './api-nossa-gelada.service';

describe('ApiNossaGeladaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiNossaGeladaService = TestBed.get(ApiNossaGeladaService);
    expect(service).toBeTruthy();
  });
});
