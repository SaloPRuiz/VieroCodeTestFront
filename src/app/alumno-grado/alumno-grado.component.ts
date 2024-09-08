import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {AlumnoGrado} from "../models/alumno-grado";
import {GradoService} from "../services/grado.service";
import {MatDialog} from "@angular/material/dialog";
import {AlumnoGradoService} from "../services/alumno-grado.service";
import {GradoFormComponent} from "../grado-form/grado-form.component";
import {Grado} from "../models/grado";
import {AlumnoGrafoFormComponent} from "../alumno-grafo-form/alumno-grafo-form.component";

@Component({
  selector: 'app-alumno-grado',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './alumno-grado.component.html',
  styleUrl: './alumno-grado.component.css'
})
export class AlumnoGradoComponent {
  alumnoGrados: AlumnoGrado [] = [];
  constructor(private service: AlumnoGradoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarListado();
  }

  agregarAlumnoGrado() {
    const dialogRef = this.dialog.open(AlumnoGrafoFormComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.create(result).subscribe(data => {
          this.cargarListado();
        });
      }
    });
  }

  editarAlumnoGrado(entidad: AlumnoGrado) {
    const dialogRef = this.dialog.open(AlumnoGrafoFormComponent, {
      width: '400px',
      data: { alumnoGrado: entidad }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.Id = entidad.id;
        this.service.create(result).subscribe(() => {
          this.cargarListado();
        });
      }
    });
  }

  eliminarAlumnoGrado(id: number) {
    this.service.delete(id).subscribe(() => {
      this.cargarListado();
    });
  }

  cargarListado() {
    this.service.consultarListado().subscribe(data => {
      this.alumnoGrados = data;
    });
  }
}
