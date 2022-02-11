import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceModel } from 'src/app/shared/models/service';
import { TechnicianService } from 'src/app/shared/services/technician.service';

@Component({
  selector: 'app-technician-services',
  templateUrl: './technician-services.component.html',
  styleUrls: ['./technician-services.component.css']
})
export class TechnicianServicesComponent implements OnInit {

  technicianId: string;
  services: ServiceModel[];
  constructor(private activatedRoute: ActivatedRoute, private technicianService: TechnicianService) { }

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
    this.technicianService.getById(this.technicianId).subscribe((data)=>{
      this.services = data.reports;
    });
  }

}
