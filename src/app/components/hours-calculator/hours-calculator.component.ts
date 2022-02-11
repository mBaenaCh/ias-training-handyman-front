import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkedHoursModel } from 'src/app/shared/models/workedHours';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-hours-calculator',
  templateUrl: './hours-calculator.component.html',
  styleUrls: ['./hours-calculator.component.css']
})
export class HoursCalculatorComponent implements OnInit {

  hoursCalculatorForm: FormGroup;
  requestParams: any;
  calculatedHours: WorkedHoursModel;
  showCalculatedHours: boolean;

  constructor(private reportService: ReportService) {
    this.requestParams = {};
    this.showCalculatedHours = false;
    this.hoursCalculatorForm = new FormGroup({
      technicianId: new FormControl('', [
        Validators.required
      ]),
      week: new FormControl('', [
        Validators.required,
        Validators.max(52)
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.showCalculatedHours = true;
    this.requestParams = this.hoursCalculatorForm.value;
    this.reportService.getWorkedHours(this.hoursCalculatorForm.get("technicianId").value, this.hoursCalculatorForm.get("week").value).subscribe((data)=>{
      this.calculatedHours = data;
    });
    this.hoursCalculatorForm.reset();
  }

}
