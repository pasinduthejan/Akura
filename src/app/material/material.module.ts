import { NgModule } from '@angular/core';
import { MatButtonModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatMenuModule,
  MatTabsModule,
  MatInputModule,
  MatStepperModule,
  MatSnackBarModule
} from '@angular/material';

const Mat = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatInputModule,
  MatStepperModule,
  MatSnackBarModule
  
];
@NgModule({
  
  imports: [Mat],
  exports: [Mat]
})
export class MaterialModule { }
