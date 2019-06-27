import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship-header',
  templateUrl: './scholarship-header.component.html',
  styleUrls: ['./scholarship-header.component.css']
})
export class ScholarshipHeaderComponent implements OnInit {

  constructor() { }

  background = '';
  links = ['Applay Scholarship', 'Upload Prograss Report', 'Third'];
  activeLink = this.links[0];


  ngOnInit() {
  }

}
