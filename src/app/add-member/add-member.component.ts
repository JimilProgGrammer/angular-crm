import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../crm-customers/customer.model';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-add-member',
  providers: [UtilsService],
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  @Input()
  showTable : boolean = true;

  @Input()
  showStatus1 : boolean;
  
  customers: Customer[];
  
  member: Customer = null;

  customerMemNo: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerDob: string;
  customerAddr: string;
  customerMemStartDate: string;
  customerMemEndDate: string;
  customerAge: number;
  
  constructor(private utilsService: UtilsService) { 
    this.customers = [
      new Customer('CU1','Test 1','9322677561','test1@example.com',new Date("05/08/1999"),'Malad East',new Date("07/23/2017"),new Date("07/23/2018"),23),
      new Customer('CU2','Test 2','8753677561','test2@example.com',new Date("03/16/1999"),'Jogeshwari East',new Date("01/21/2017"),new Date("01/21/2018"),19),
      new Customer('CU3','Test 3','9443367243','test3@example.com',new Date("09/10/1999"),'Andheri East',new Date("03/11/2017"),new Date("03/11/2018"),19),
    ];
    //this.showStatus1 = false;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.utilsService.triggerForComponent();
  }

  addMember() {
    this.customerDob = (<HTMLInputElement>document.getElementById('customerDob')).value;
    this.customerMemStartDate = (<HTMLInputElement>document.getElementById('customerMemStartDate')).value;
    this.customerMemEndDate = (<HTMLInputElement>document.getElementById('customerMemEndDate')).value;
    this.member = new Customer(
      this.customerMemNo, 
      this.customerName, 
      this.customerPhone, 
      this.customerEmail, 
      //d1Str.toLocaleDateString("en-US",{year: 'numeric', month: 'long',day: 'numeric'}), 
      new Date(Date.parse(this.customerDob)),
      this.customerAddr, 
      new Date(Date.parse(this.customerMemStartDate)),
      new Date(Date.parse(this.customerMemEndDate)),
      this.customerAge
    );
    this.customers.push(this.member);
    this.showStatus1 = false;
    var user = {
      name: this.member.customerName.toString(),
      phone: this.member.customerPhone.toString(),
      email: this.member.customerEmail.toString(),
      dob: this.member.customerDob.toString()
    };
    this.utilsService.addUser(user);
  }

  changeShowStatus() {
    this.showStatus1 = !(this.showStatus1);
  }

}
