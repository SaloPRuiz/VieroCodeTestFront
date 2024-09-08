import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {NgForOf, NgIf} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton} from "@angular/material/button";
import {Grado} from "../models/grado";
import {Alumno} from "../models/alumno";
import {AlumnoService} from "../services/alumno.service";
import {AlumnoGrado} from "../models/alumno-grado";
import {GradoService} from "../services/grado.service";

@Component({
  selector: 'app-alumno-grafo-form',
  standalone: true,
  imports: [MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    NgIf,
    MatInput,
    MatSelect,
    MatOption,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatDialogActions,
    MatButton, NgForOf],
  templateUrl: './alumno-grafo-form.component.html',
  styleUrl: './alumno-grafo-form.component.css'
})
export class AlumnoGrafoFormComponent implements OnInit {
  alumnoGradoForm: FormGroup;
  grados: Grado[] = [];
  alumnos: Alumno[] = [];
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AlumnoGrafoFormComponent>,
    private gradoService: GradoService,
    private alumnoService: AlumnoService,
    @Inject(MAT_DIALOG_DATA) public data: { alumnoGrado: AlumnoGrado }
  ) {
    this.alumnoGradoForm = this.fb.group({
      seccion: ['', Validators.required],
      gradoId: ['', Validators.required],
      alumnoId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarGrados();
    this.cargarAlumnos();

    if (this.data && this.data.alumnoGrado) {
      this.isEdit = true;
      this.alumnoGradoForm.patchValue(this.data.alumnoGrado);
    }
  }

  cargarGrados(): void {
    this.gradoService.consultarListado().subscribe((data: Grado[]) => {
      this.grados = data;
    });
  }

  cargarAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe((data: Alumno[]) => {
      this.alumnos = data;
    });
  }

  onSubmit(): void {
    if (this.alumnoGradoForm.valid) {
      this.dialogRef.close(this.alumnoGradoForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
