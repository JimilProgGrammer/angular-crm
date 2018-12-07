export class Visits {
    
    billNo: string;
    dateOfVisit: Date;
    date_formatted : string;
    memberNo: string;
    billAmt: number;
    visitBranch: string;
    overallFeedback: number;
    
    constructor(
        billNo: string,
        dateOfVisit: Date,
        memberNo: string,
        billAmt: number,
        visitBranch: string,
        overallFeedback: number
    ) {
        this.billNo = billNo;
        this.dateOfVisit = dateOfVisit;
        this.date_formatted = this.dateOfVisit.toLocaleDateString("en-US",{year: 'numeric', month: 'long',day: 'numeric'});
        this.memberNo = memberNo;
        this.billAmt = billAmt;
        this.visitBranch = visitBranch;
        this.overallFeedback = overallFeedback;
    }

}