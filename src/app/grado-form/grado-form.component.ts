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
import {Profesor} from "../models/profesor";
import {Grado} from "../models/grado";
import {ProfesorService} from "../services/profesor.service";

@Component({
  selector: 'app-grado-form',
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
  templateUrl: './grado-form.component.html',
  styleUrl: './grado-form.component.css'
})
export class GradoFormComponent implements OnInit {
  gradoForm: FormGroup;
  profesores: Profesor[] = [];
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GradoFormComponent>,
    private profesorService: ProfesorService,
    @Inject(MAT_DIALOG_DATA) public data: { grado: Grado }
  ) {
    this.gradoForm = this.fb.group({
      nombre: ['', Validators.required],
      profesorId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarProfesores();

    if (this.data && this.data.grado) {
      this.isEdit = true;
      this.gradoForm.patchValue(this.data.grado);
    }
  }

  cargarProfesores(): void {
    this.profesorService.consultarListado().subscribe((data: Profesor[]) => {
      this.profesores = data;
    });
  }

  onSubmit(): void {
    if (this.gradoForm.valid) {
      this.dialogRef.close(this.gradoForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
