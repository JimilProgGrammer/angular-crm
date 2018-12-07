import { AddVisitComponent } from './add-visit/add-visit.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddMemberComponent } from './add-member/add-member.component';

const routes: Routes = [
    {path: 'feedback', component: FeedbackComponent},
    {path: 'customers', component: AddMemberComponent},
    {path: 'visits', component: AddVisitComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}