import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportModel } from 'src/app/shared/models/report';
import { TechnicianModel } from 'src/app/shared/models/technician';
import { ReportService } from 'src/app/shared/services/report.service';
import { TechnicianService } from 'src/app/shared/services/technician.service';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {

  receivedTechnicianId: string;
  technician: TechnicianModel;
  registerServiceForm: FormGroup;
  createdReport: ReportModel;

  constructor(private activatedRoute: ActivatedRoute, 
    private technicianService: TechnicianService, 
    private reportService: ReportService,
    private router: Router) {

    this.registerServiceForm = new FormGroup({
      technicianId: new FormControl('', [
        Validators.required
      ]),
      serviceId: new FormControl('', [
        Validators.required
      ]),
      initDateTime: new FormControl('', [
        Validators.required
      ]),
      endDateTime: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    this.getServicesList();
    this.setTechnicianIdValue();
  }

  getRouteParamValue(): void {
    this.activatedRoute.params.subscribe(params => {
      this.receivedTechnicianId = params.id;
    });
  }

  getServicesList(): void {
    this.getRouteParamValue();
    this.technicianService.getById(this.receivedTechnicianId).subscribe((data) => {
      this.technician = data;
    });
  }

  onSubmit(): void {
    this.createdReport = this.registerServiceForm.value;
    this.reportService.create(this.createdReport).subscribe();
    this.registerServiceForm.reset();
  }

  setTechnicianIdValue(): void{
    this.registerServiceForm.controls.technicianId.setValue(this.receivedTechnicianId);
  }

  onClickReturn(): void {
    this.router.navigate(["/technician"]);
  }

}
