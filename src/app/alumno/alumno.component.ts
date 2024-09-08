import { Component } from '@angular/core';
import {AlumnoService} from "../services/alumno.service";
import {Alumno} from "../models/alumno";
import { MatDialog } from '@angular/material/dialog';
import {DatePipe, NgForOf} from "@angular/common";
import {AlumnoFormComponent} from "../alumno-form/alumno-form.component";

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  agregarAlumno() {
    const dialogRef = this.dialog.open(AlumnoFormComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.alumnoService.createAlumno(result).subscribe(data => {
          this.cargarAlumnos();
        });
      }
    });
  }

  cargarAlumnos() {
    this.alumnoService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

  editarAlumno(alumno: Alumno) {
    const dialogRef = this.dialog.open(AlumnoFormComponent, {
      width: '400px',
      data: { alumno: alumno }  // Envía los datos del alumno al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.Id = alumno.id;
        this.alumnoService.createAlumno(result).subscribe(() => {
          this.cargarAlumnos();
        });
      }
    });
  }

  eliminarAlumno(id: number) {
    this.alumnoService.deleteAlumno(id).subscribe(() => {
      this.cargarAlumnos();
    });
  }
}
