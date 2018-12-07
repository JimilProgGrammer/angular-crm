export class Customer {

    customerMemNo: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    customerDob: Date;
    formatted_customerDob : string;
    customerAddr: string;
    customerMemStartDate: Date;
    formatted_customerMemStartDate: string;
    customerMemEndDate: Date;
    formatted_customerMemEndDate: string;
    customerAge: number;

    constructor(
        customerMemNo: string,
        customerName: string,
        customerPhone: string,
        customerEmail: string,
        customerDob: Date,
        customerAddr: string,
        customerMemStartDate: Date,
        customerMemEndDate: Date,
        customerAge: number
    ) {
            this.customerMemNo = customerMemNo;
            this.customerName = customerName;
            this.customerPhone = customerPhone;
            this.customerEmail = customerEmail;
            this.customerDob = customerDob;
            this.formatted_customerDob = customerDob.toLocaleDateString("en-US",{year: 'numeric', month: 'long',day: 'numeric'});
            this.customerAddr = customerAddr;
            this.customerMemStartDate = customerMemStartDate;
            this.formatted_customerMemStartDate = customerMemStartDate.toLocaleDateString("en-US",{year: 'numeric', month: 'long',day: 'numeric'});
            this.customerMemEndDate = customerMemEndDate;
            this.formatted_customerMemEndDate = customerMemEndDate.toLocaleDateString("en-US",{year: 'numeric', month: 'long',day: 'numeric'});
            this.customerAge = customerAge;
    }

    ngOnInit() {
    }

}