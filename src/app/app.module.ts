import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';

import { UserRegistrationService } from './services/user-registration.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './Registration/user-registration/user-registration.component';
import { SchApplyForm1Component } from './Scholarship/sch-apply-form1/sch-apply-form1.component';
import { SchApplyForm2Component } from './Scholarship/sch-apply-form2/sch-apply-form2.component';
import { AddExpensesComponent } from './Financial/add-expenses/add-expenses.component';
import { AddIncomeComponent } from './Financial/add-income/add-income.component';
import { FinancialManagementMainComponent } from './Financial/financial-management-main/financial-management-main.component';
import { GenerateReportComponent } from './Financial/generate-report/generate-report.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { CreatProjectComponent } from './ProjectManagement/creat-project/creat-project.component';
import { EnrollProjectComponent } from './ProjectManagement/enroll-project/enroll-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';
import { ScholarshipHeaderComponent } from './Scholarship/scholarship-header/scholarship-header.component';
import { UploadPrograssReportComponent } from './Scholarship/upload-prograss-report/upload-prograss-report.component';
import { ProjectManagementHeaderComponent } from './ProjectManagement/project-management-header/project-management-header.component';
import { FinanceHeaderComponent } from './Financial/finance-header/finance-header.component';
import { Auth1Guard } from './Guard/auth1.guard';
import { TokenIntercepterService } from './services/token-intercepter.service';
import { ResetMailSendComponent } from './ResetPassword/reset-mail-send/reset-mail-send.component';
import { ResetpassComponent } from './ResetPassword/resetpass/resetpass.component';
import { ActivateComponent } from './Registration/activate/activate.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    SchApplyForm1Component,
    SchApplyForm2Component,
    AddExpensesComponent,
    AddIncomeComponent,
    FinancialManagementMainComponent,
    GenerateReportComponent,
    DashboadComponent,
    CreatProjectComponent,
    EnrollProjectComponent,
    DashboardNewComponent,
    ScholarshipHeaderComponent,
    UploadPrograssReportComponent,
    ProjectManagementHeaderComponent,
    FinanceHeaderComponent,
    ResetMailSendComponent,
    ResetpassComponent,
    ActivateComponent,
 
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [
      UserRegistrationService, 
      Auth1Guard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenIntercepterService,
        multi: true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
