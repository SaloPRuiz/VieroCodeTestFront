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
import {Profesor} from "../models/profesor";

@Component({
  selector: 'app-profesor-form',
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
  templateUrl: './profesor-form.component.html',
  styleUrl: './profesor-form.component.css'
})
export class ProfesorFormComponent implements OnInit {
  profesorForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProfesorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { profesor: Profesor }
  ) {
    this.profesorForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      genero: ['Masculino', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data && this.data.profesor) {
      this.isEdit = true;
      this.profesorForm.patchValue(this.data.profesor);
    }
  }

  onSubmit(): void {
    if (this.profesorForm.valid) {
      this.dialogRef.close(this.profesorForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
