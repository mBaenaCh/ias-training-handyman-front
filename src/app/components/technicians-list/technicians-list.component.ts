import { Component, OnInit } from '@angular/core';
import { TechnicianModel } from 'src/app/shared/models/technician';

@Component({
  selector: 'app-technicians-list',
  templateUrl: './technicians-list.component.html',
  styleUrls: ['./technicians-list.component.css']
})
export class TechniciansListComponent implements OnInit {

  technicians: TechnicianModel[];
  constructor() { }

  ngOnInit(): void {
  }

  onClick(technician: TechnicianModel) {
    console.log(technician);
  }

}
