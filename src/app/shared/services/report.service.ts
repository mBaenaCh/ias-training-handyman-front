import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportModel } from '../models/report';
import { WorkedHoursModel } from '../models/workedHours';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseUrl: string;
  constructor(private readonly http: HttpClient) { 
    this.baseUrl = "http://localhost:8080/api/reports"
  }

  create(report: ReportModel): Observable<ReportModel>{
    const reportBody = {
      "technicianId": report.technicianId,
      "serviceId": report.serviceId,
      "initDateTime": report.initDateTime,
      "endDateTime": report.endDateTime
    }

    return this.http.post<ReportModel>(this.baseUrl, reportBody);
  }

  getWorkedHours(id: string, week: number): Observable<WorkedHoursModel> {
    return this.http.get<WorkedHoursModel>(`${this.baseUrl}/${id}/calculate-hours/${week}`);
  }
}
