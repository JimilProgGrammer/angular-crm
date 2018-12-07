import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppRoutingModule } from './app.routing';
import { CrmVisitsComponent } from './crm-visits/crm-visits.component';
import { CrmCustomersComponent } from './crm-customers/crm-customers.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddVisitComponent } from './add-visit/add-visit.component';
import { UtilsService } from './utils.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    CrmVisitsComponent,
    CrmCustomersComponent,
    AddMemberComponent,
    AddVisitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
