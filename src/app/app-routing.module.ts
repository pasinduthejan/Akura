import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './Registration/user-registration/user-registration.component';
import { SchApplyForm1Component } from './Scholarship/sch-apply-form1/sch-apply-form1.component';
import { SchApplyForm2Component } from './Scholarship/sch-apply-form2/sch-apply-form2.component';
import { AddExpensesComponent } from './Financial/add-expenses/add-expenses.component';
import { AddIncomeComponent } from './Financial/add-income/add-income.component';
import { FinancialManagementMainComponent } from './Financial/financial-management-main/financial-management-main.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { CreatProjectComponent } from './ProjectManagement/creat-project/creat-project.component';
import { GenerateReportComponent } from './Financial/generate-report/generate-report.component';
import { EnrollProjectComponent } from './ProjectManagement/enroll-project/enroll-project.component';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';
import { ScholarshipHeaderComponent } from './Scholarship/scholarship-header/scholarship-header.component';
import { UploadPrograssReportComponent} from './Scholarship/upload-prograss-report/upload-prograss-report.component';
import { ProjectManagementHeaderComponent } from './ProjectManagement/project-management-header/project-management-header.component';
import { FinanceHeaderComponent } from './Financial/finance-header/finance-header.component';
import { ResetMailSendComponent } from './ResetPassword/reset-mail-send/reset-mail-send.component';
import { ResetpassComponent } from './ResetPassword/resetpass/resetpass.component';
import { ActivateComponent } from './Registration/activate/activate.component';

import { Auth1Guard } from './Guard/auth1.guard';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetMailSendComponent },
  { path: 'reset/:token', component: ResetpassComponent },
  { path: '', component: LoginComponent },
  { path: 'userRegistration', component: UserRegistrationComponent },
  { path: 'active/:token', component: ActivateComponent },
  { path: 'dash2', component: DashboardNewComponent, canActivate:[Auth1Guard] },
  
  { path: 'addExpence', component: AddExpensesComponent },
  { path: 'addIncome', component: AddIncomeComponent },
  { 
    path: 'dash2', 
    component: DashboardNewComponent,
    canActivate:[Auth1Guard],
    children : [      
      {
        path:'schHeared',
        component:ScholarshipHeaderComponent,
        children : [
          { 
            path: 'schApplyForm1', 
            component: SchApplyForm1Component 
          },
          { 
            path: 'schApplyForm2', 
            component: SchApplyForm2Component 
          },
          {
            path: 'upProgRepo',
            component: UploadPrograssReportComponent
          }
        ]
      },
      {
        path:'projectHeared',
        component:ProjectManagementHeaderComponent,
        children : [
          {
            path:'createproject',
            component:CreatProjectComponent
          },
          { 
            path: 'enrollProject', 
            component: EnrollProjectComponent 
          }
        ]
      },
      {
        path:'financeHeared',
        component:FinanceHeaderComponent,
        children : [
          { 
            path: 'financialManagement', 
            component: FinancialManagementMainComponent 
          },
          { 
            path: 'generateReport', 
            component: GenerateReportComponent 
          },
          {
            path : 'expenses',
            component : AddExpensesComponent
          },
          {
            path : 'income',
            component : AddIncomeComponent
          },
          {
            path : '',
            component : AddIncomeComponent
          }
        ]
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
