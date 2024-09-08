import { Component } from '@angular/core';
import {Profesor} from "../models/profesor";
import {ProfesorService} from "../services/profesor.service";
import {MatDialog} from "@angular/material/dialog";
import {ProfesorFormComponent} from "../profesor-form/profesor-form.component";
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent {
  profesores: Profesor[] = [];

  constructor(private profesorService: ProfesorService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarListado();
  }

  agregarProfesor() {
    const dialogRef = this.dialog.open(ProfesorFormComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.profesorService.create(result).subscribe(data => {
          this.cargarListado();
        });
      }
    });
  }

  editarProfesor(entidad: Profesor) {
    const dialogRef = this.dialog.open(ProfesorFormComponent, {
      width: '400px',
      data: { profesor: entidad }  // Envía los datos del alumno al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.Id = entidad.id;
        this.profesorService.create(result).subscribe(() => {
          this.cargarListado();
        });
      }
    });
  }

  eliminarProfesor(id: number) {
    this.profesorService.delete(id).subscribe(() => {
      this.cargarListado();
    });
  }

  cargarListado() {
    this.profesorService.consultarListado().subscribe(data => {
      this.profesores = data;
    });
  }
}
