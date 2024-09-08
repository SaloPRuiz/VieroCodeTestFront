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
import {NgIf} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton} from "@angular/material/button";
import {Alumno} from "../models/alumno";

@Component({
  selector: 'app-alumno-form',
  standalone: true,
  imports: [
    MatDialogTitle,
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
    MatButton
  ],
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.css'
})
export class AlumnoFormComponent implements OnInit {
  alumnoForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AlumnoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { alumno: Alumno }
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      genero: ['Masculino', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data && this.data.alumno) {
      this.isEdit = true;
      this.alumnoForm.patchValue(this.data.alumno);
    }
  }
  onSubmit(): void {
    if (this.alumnoForm.valid) {
      this.dialogRef.close(this.alumnoForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
