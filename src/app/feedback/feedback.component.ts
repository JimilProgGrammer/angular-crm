import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UtilsService } from '../utils.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  providers: [UtilsService],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  feedbackForm = this.fb.group({
    menuVarietyRating : [1],
    foodQualityRating : [1],
    foodTasteRating : [1],
    ambienceRating : [1],
    serviceRating : [1],
    waitRating : [1],
    recommendRating : [1],
    reservationRating : [1],
    feedback : ['',Validators.required],
    visitDate : [null],
    userEmail : [''],
    userName : [''],
    userPhone : ['',Validators.compose([
      Validators.required,this.validatePhoneNumber
    ])],
    userDob : [null],
    billNo : ['',Validators.required],
    billAmt : [null, Validators.required],
    membershipNo :['',Validators.required]
  });

  @ViewChild('userName') userName : ElementRef;
  @ViewChild('userEmail') userEmail : ElementRef;
  @ViewChild('userDob') userDob : ElementRef;
  @ViewChild('userPhone') userPhone : ElementRef;
  @ViewChild('modalTrigger') modalButton : ElementRef;

  constructor(private fb: FormBuilder, private utilsService: UtilsService) {
    
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.utilsService.triggerForComponent();
  }

  parameterRated(variableName: string) {
    //this.feedback[variableName] = rating;
    alert("User rated " + variableName + " to " + this.feedbackForm.controls[variableName].value);
  }

  performLookup() {
    if(this.feedbackForm.controls['userPhone'].value.toString().length == 10) {
      var lookupObj = this.utilsService.performLookup(this.feedbackForm.controls['userPhone'].value.toString());
      if(lookupObj == null || lookupObj == 0) {
        alert("Lookup found no user");
        console.log("Lookup found no user");
        this.userPhone.nativeElement.value = '';
        this.userPhone.nativeElement.focus();
        this.modalButton.nativeElement.click();
      } else {
        console.log(lookupObj);
        //(<HTMLInputElement>document.getElementById('userName')).value = lookupObj['name'];
        this.userName.nativeElement.value = lookupObj['name'];
        this.userEmail.nativeElement.value = lookupObj['email'];
        this.userEmail.nativeElement.focus();
        this.userDob.nativeElement.value = lookupObj['dob'];
        this.userDob.nativeElement.focus();
        this.userName.nativeElement.focus();
      }
    }
  }

  validatePhoneNumber(control: FormControl) : {[s:string]:boolean} {
    if(control.value.toString().length < 10 ||
      control.value.toString().length > 10) {
        return {invalidPhoneNo : true};
    }
  }

}
