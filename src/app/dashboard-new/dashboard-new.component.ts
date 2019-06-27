import { Component, OnInit } from '@angular/core';
import { UserRegistrationService} from '../services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.css']
})
export class DashboardNewComponent implements OnInit {

  constructor(private _authServise:UserRegistrationService, private _router:Router) { }

  Username = 'Pasindu';
  notifications = ['notifications 1', 'notifications 2', 'notifications 3'];

  logOut(){
    this._authServise.logUotService().subscribe(
      message=>{
        console.log(message.message)
        if(message.message==='Successfully logged out'){
          this._router.navigate(['/login'])
          localStorage.removeItem('token')
        }
      }
    );
  }
  
  ngOnInit() {
  }

}
