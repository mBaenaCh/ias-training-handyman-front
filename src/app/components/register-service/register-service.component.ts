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
  minDate: string;
  maxDate: string;
  isDatesValid: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private technicianService: TechnicianService,
    private reportService: ReportService,
    private router: Router) {

    this.minDate = new Date().toISOString().split('T')[0];  //Getting the actual date to limit the minimum entry date
    this.maxDate = this.minDate;
    this.isDatesValid = true;

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
    this.setMinDate();
    this.setMaxDate();
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

    location.reload();

    this.registerServiceForm.reset();
  }

  setTechnicianIdValue(): void {
    this.registerServiceForm.controls.technicianId.setValue(this.receivedTechnicianId);
  }

  onClickReturn(): void {
    this.router.navigate(["/technician"]);
  }

  setMinDate(): void {
    this.minDate = this.minDate+"T00:00";
  }

  setMaxDate(): void {
    this.maxDate = this.maxDate+"T23:59";
  }

  checkDate(): void{
    if(this.registerServiceForm.controls.initDateTime.value <= this.registerServiceForm.controls.endDateTime.value){
      this.isDatesValid = true;
    }else{
      this.isDatesValid = false
    }
  }

}
