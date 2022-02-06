import { Component, OnInit } from '@angular/core';
import { TechnicianModel } from 'src/app/shared/models/technician';
import { TechnicianService } from 'src/app/shared/services/technician.service';

@Component({
  selector: 'app-technicians-list',
  templateUrl: './technicians-list.component.html',
  styleUrls: ['./technicians-list.component.css']
})
export class TechniciansListComponent implements OnInit {

  technicians: TechnicianModel[];
  constructor(private technicianService: TechnicianService) { }

  ngOnInit(): void {
    this.getAllTechnicians();
  }

  onClick(technician: TechnicianModel) {
    console.log(technician);
  }

  getAllTechnicians(): void {
    this.technicianService.getAll().subscribe((data)=>{
      this.technicians = data;
    });
  }

}
