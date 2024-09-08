import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profesor} from "../models/profesor";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private apiUrl = 'https://localhost:7163/api/Profesor';

  constructor(private http: HttpClient) { }

  consultarListado(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.apiUrl);
  }

  create(body: Profesor): Observable<Profesor> {
    return this.http.post<Profesor>(this.apiUrl, body);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
