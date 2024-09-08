import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Grado} from "../models/grado";
import {MatDialog} from "@angular/material/dialog";
import {GradoService} from "../services/grado.service";
import {GradoFormComponent} from "../grado-form/grado-form.component";

@Component({
  selector: 'app-grado',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './grado.component.html',
  styleUrl: './grado.component.css'
})
export class GradoComponent {
  grados: Grado[] = [];
  constructor(private service: GradoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarListado();
  }

  agregarGrado() {
    const dialogRef = this.dialog.open(GradoFormComponent, {
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

  editarGrado(entidad: Grado) {
    const dialogRef = this.dialog.open(GradoFormComponent, {
      width: '400px',
      data: { grado: entidad }
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

  eliminarGrado(id: number) {
    this.service.delete(id).subscribe(() => {
      this.cargarListado();
    });
  }

  cargarListado() {
    this.service.consultarListado().subscribe(data => {
      this.grados = data;
    });
  }
}
