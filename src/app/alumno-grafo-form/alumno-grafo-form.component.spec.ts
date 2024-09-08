import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoGrafoFormComponent } from './alumno-grafo-form.component';

describe('AlumnoGrafoFormComponent', () => {
  let component: AlumnoGrafoFormComponent;
  let fixture: ComponentFixture<AlumnoGrafoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoGrafoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoGrafoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
