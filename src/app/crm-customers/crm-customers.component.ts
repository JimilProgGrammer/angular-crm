import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-crm-customers',
  templateUrl: './crm-customers.component.html',
  styleUrls: ['./crm-customers.component.css']
})
export class CrmCustomersComponent implements OnInit {

  @Input() customers: Customer[];
  
  constructor() { }

  ngOnInit() {
  }

  public addMember(customer: Customer): boolean {
    this.customers.push(customer);
    if(this.customers.indexOf(customer) != 0) {
      return true;
    }
  }

}
