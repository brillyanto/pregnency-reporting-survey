import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFollowUpComponent } from './add-follow-up/add-follow-up.component';
import { AddNewReportComponent } from './add-new-report/add-new-report.component';
import { AeInPregnancyComponent } from './ae-in-pregnancy/ae-in-pregnancy.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { MainComponent } from './main/main.component';

import { ReporterInfoComponent } from './reporter-info/reporter-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'add-follow-up', component: AddFollowUpComponent },
  { path: 'follow-up', component: FollowUpComponent },
  { path: 'ae-in-pregnancy', component: AeInPregnancyComponent },
  { path: 'reporter-info', component: ReporterInfoComponent },
  { path: 'add-new-report', component: AddNewReportComponent },
  { path: 'generate-report', component: GenerateReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
