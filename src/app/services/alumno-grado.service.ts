import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AlumnoGrado} from "../models/alumno-grado";

@Injectable({
  providedIn: 'root'
})
export class AlumnoGradoService {
  private apiUrl = 'https://localhost:7163/api/AlumnoGrado';

  constructor(private http: HttpClient) { }

  consultarListado(): Observable<AlumnoGrado[]> {
    return this.http.get<AlumnoGrado[]>(this.apiUrl);
  }

  create(body: AlumnoGrado): Observable<AlumnoGrado> {
    return this.http.post<AlumnoGrado>(this.apiUrl, body);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
