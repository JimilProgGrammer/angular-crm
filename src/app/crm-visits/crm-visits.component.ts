import { Visits } from './visits.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crm-visits',
  templateUrl: './crm-visits.component.html',
  styleUrls: ['./crm-visits.component.css']
})
export class CrmVisitsComponent implements OnInit {

  @Input() visits: Visits[];
  
  constructor() { }

  ngOnInit() {
  }

}
