import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sch-apply-form1',
  templateUrl: './sch-apply-form1.component.html',
  styleUrls: ['./sch-apply-form1.component.css']
})
export class SchApplyForm1Component implements OnInit {

  constructor() { }

  topics=['Sri lanka','Other country'];
  topicHasError=true;
    validateTopic(value)
      {
   if(value === 'default'){
          this. topicHasError =true;
   }
     else{

       this.topicHasError =false;

     }

  }

  ngOnInit() {
  }

}
