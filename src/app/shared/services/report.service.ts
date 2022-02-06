import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseUrl: string;
  constructor(private readonly http: HttpClient) { 
    this.baseUrl = "http://localhost:8080/api/reports"
  }
}
