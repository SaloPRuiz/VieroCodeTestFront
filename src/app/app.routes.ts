import { Routes } from '@angular/router';
import {AlumnoComponent} from "./alumno/alumno.component";
import {ProfesorComponent} from "./profesor/profesor.component";
import {GradoComponent} from "./grado/grado.component";
import {AlumnoGradoComponent} from "./alumno-grado/alumno-grado.component";

export const routes: Routes = [
  { path: 'alumnos', component: AlumnoComponent },
  { path: 'profesores', component: ProfesorComponent },
  { path: 'grados', component: GradoComponent },
  { path: 'alumno-grados', component: AlumnoGradoComponent },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
];
