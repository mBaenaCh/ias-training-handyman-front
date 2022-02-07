import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianModel } from 'src/app/shared/models/technician';
import { TechnicianService } from 'src/app/shared/services/technician.service';

@Component({
  selector: 'app-technicians-list',
  templateUrl: './technicians-list.component.html',
  styleUrls: ['./technicians-list.component.css']
})
export class TechniciansListComponent implements OnInit {

  technicians: TechnicianModel[];
  constructor(private technicianService: TechnicianService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTechnicians();
  }

  onClick(technician: TechnicianModel) {
    this.router.navigate(["technician/"+technician.technicianId]);
  }

  getAllTechnicians(): void {
    this.technicianService.getAll().subscribe((data)=>{
      this.technicians = data;
    });
  }

}
