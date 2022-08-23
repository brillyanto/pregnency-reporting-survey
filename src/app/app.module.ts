import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { AeInPregnancyComponent } from './ae-in-pregnancy/ae-in-pregnancy.component';
import { ReporterInfoComponent } from './reporter-info/reporter-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AddFollowUpComponent } from './add-follow-up/add-follow-up.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { AddNewReportComponent } from './add-new-report/add-new-report.component';
import { StepsComponent } from './add-new-report/steps/steps.component';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FollowUpComponent,
    AeInPregnancyComponent,
    ReporterInfoComponent,
    // PatientDetailsComponent,
    AddFollowUpComponent,
    AddNewReportComponent,
    StepsComponent,
    GenerateReportComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    TabViewModule,
    DropdownModule,
    TableModule,
    // CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
