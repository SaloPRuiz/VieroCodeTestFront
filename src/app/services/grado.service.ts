import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profesor} from "../models/profesor";
import {Grado} from "../models/grado";

@Injectable({
  providedIn: 'root'
})
export class GradoService {
  private apiUrl = 'https://localhost:7163/api/Grado';
  constructor(private http: HttpClient) { }

  consultarListado(): Observable<Grado[]> {
    return this.http.get<Grado[]>(this.apiUrl);
  }

  create(body: Grado): Observable<Grado> {
    return this.http.post<Grado>(this.apiUrl, body);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
