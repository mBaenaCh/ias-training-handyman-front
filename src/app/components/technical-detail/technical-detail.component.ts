import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technical-detail',
  templateUrl: './technical-detail.component.html',
  styleUrls: ['./technical-detail.component.css']
})
export class TechnicalDetailComponent implements OnInit {

  @Output() technicianId: EventEmitter<string>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.technicianId = new EventEmitter();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.technicianId.emit(params.id);
    })
    
  }

  



}
