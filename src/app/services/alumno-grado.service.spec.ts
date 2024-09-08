import { TestBed } from '@angular/core/testing';

import { AlumnoGradoService } from './alumno-grado.service';

describe('AlumnoGradoService', () => {
  let service: AlumnoGradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoGradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
