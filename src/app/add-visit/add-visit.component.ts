import { UtilsService } from './../utils.service';
import { Visits } from './../crm-visits/visits.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {

  utilsService : UtilsService = new UtilsService();
  
  showStatus: boolean;
  
  visits : Visits[];
  visit : Visits = null;

  billNo: string;
  dateOfVisit: string;
  memberNo: string;
  billAmt: number;
  visitBranch: string;
  overallFeedback: number;

  constructor() { 
    this.visits = [
      new Visits("R1-BN-1",new Date("05/08/2018"),"CU1",1200,"Mumbai",4.5),
      new Visits("R1-BN-2",new Date("06/11/2018"),"CU3",200,"Bangalore",4),
      new Visits("R1-BN-3",new Date("08/23/2018"),"CU1",952,"Chennai",2),
      new Visits("R1-BN-4",new Date("07/11/2018"),"CU3",2200,"Bangalore",5),
      new Visits("R1-BN-5",new Date("08/09/2018"),"CU2",1500,"Hyderabad",4),
    ];
    this.showStatus = false;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.utilsService.triggerForComponent();
  }

  addVisit() {
    this.dateOfVisit = (<HTMLInputElement>document.getElementById('dateOfVisit')).value;
    console.log(this.dateOfVisit);
    console.log(new Date(Date.parse(this.dateOfVisit)));
    this.visit = new Visits(this.billNo, new Date(Date.parse(this.dateOfVisit)), this.memberNo, this.billAmt, this.visitBranch, this.overallFeedback);
    this.visits.push(this.visit);
    document.getElementById('resetBtn').click();
    this.showStatus = false;
  }

  changeShowStatus() {
    this.showStatus = !this.showStatus;
  }

}
