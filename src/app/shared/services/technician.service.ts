import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TechnicianModel } from '../models/technician';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  baseUrl: string;
  constructor(private readonly http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/api/technicians';
  }

  getAll(): Observable<TechnicianModel[]> {
    return this.http.get<TechnicianModel[]>(this.baseUrl);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
