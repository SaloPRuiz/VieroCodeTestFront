import { Routes } from '@angular/router';
import {AlumnoComponent} from "./alumno/alumno.component";

export const routes: Routes = [
  { path: 'alumnos', component: AlumnoComponent },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
];
