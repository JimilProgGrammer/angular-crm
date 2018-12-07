import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private userDict = [
    {
      name: "ABC",
      phone: "8879908358",
      email: "testLookup@lookup.com",
      dob: "05/08/1999"
    },
    {
      name: "XYZ",
      phone: "9322677561",
      email: "testLookup2@lookup.com",
      dob: "09/10/1999"
    },
    {
      name: "PQR",
      phone: "9987899678",
      email: "testLookup3@lookup.com",
      dob: "03/16/2000"
    }
  ]
  
  constructor() { }

  triggerForComponent() {
    //datepicker plugin activate
    ($('.datepicker') as any).datepicker({
      autoClose : true,
      format : 'mm/dd/yyyy',
      editable : true
    });
    //Drop down plugin activate
    ($('select') as any).formSelect();
    //Modal plugin activate
    ($('.modal') as any).modal();
  }

  performLookup(phone: string) : any {
    if(this.userDict.find(x => x.phone == phone)) {
      var index = this.userDict.findIndex(x => x.phone == phone);
      return this.userDict[index];
    } else {
      return 0;
    }
  }

  addUser(user : any) : void {
    this.userDict.push(user);
  }
}
