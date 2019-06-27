import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from "@angular/router";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from '../../model/user';
import { UserRegistrationService } from '../../services/user-registration.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(
    private router: Router, 
    private userRegistrationService: UserRegistrationService,
    private _snackBar: MatSnackBar,
    private _router:Router
    ) { }
  

  //userModel = new User('Pasindu','123','123','abc@gmail.com');
  userModel = new User('','','','','','','','','','','','','','','','');
  edited = false;
  ev :String;
  ex = ['student', 'sponsor', 'mentor', 'coordinator'];
  //userModel ={'sname':'','email':'','password':'','password_confirmation':''};

  ngOnInit() {
    
  }

  selectChange(event){
    this.ev = event.target.value;
  }
  
  onSubmit(){
    console.log(this.userModel);

    this.userRegistrationService.registerUser(this.userModel)
      .subscribe(
        message => {
          //console.log(message.message);
          if('Successfully created user!'== message.message){
              this.openSnackBar('Registation Successfully..! We sent activation link via e-mail','cancel');
              this._router.navigate(['/login'])
          }
        },
        error => {
          //console.log(error);
          if(error.status==422){
            this.openSnackBar(error.error.message,'cancel');
            this.userModel.email = '';
          }
        }
        

      )

     
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
    });
  }
  
}
