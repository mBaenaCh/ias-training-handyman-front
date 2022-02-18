import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceModel } from 'src/app/shared/models/service';
import { TechnicianModel } from 'src/app/shared/models/technician';
import { ReportService } from 'src/app/shared/services/report.service';
import { TechnicianService } from 'src/app/shared/services/technician.service';
import { mergeMap, tap } from 'rxjs/operators';
import { ReportModel } from 'src/app/shared/models/report';

@Component({
  selector: 'app-technical-detail',
  templateUrl: './technical-detail.component.html',
  styleUrls: ['./technical-detail.component.css']
})
export class TechnicalDetailComponent implements OnInit {

  technicianId: string;
  serviceList: ServiceModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private technicianService: TechnicianService,
    private reportService: ReportService) {

    this.technicianId = "";
    this.serviceList = [];
  }

  ngOnInit(): void {
    this.getServicesList();
  }

  getRouteParamValue(): void{
    this.activatedRoute.params.subscribe(params => {
      this.technicianId = params.id;
    });
  }

  getServicesList(): void{
    this.getRouteParamValue();
    this.setServicesList();
  }

  setServicesList(): void{
    this.technicianService.getById(this.technicianId).subscribe((data) => {
      this.serviceList = data.reports;
    });
  }

  /* Must evaluate single responsability */
  onReceiveEmitedService($event: ReportModel): void {
    this.reportService.create($event).subscribe();
    this.setServicesList();
  }
}
