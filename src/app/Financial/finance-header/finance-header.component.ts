import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-header',
  templateUrl: './finance-header.component.html',
  styleUrls: ['./finance-header.component.css']
})
export class FinanceHeaderComponent implements OnInit {

  constructor() { }

  links = ['Add Income', 'Add Expenses', 'Genarate Report'];
  activeLink = this.links[0];

  ngOnInit() {
  }

}
