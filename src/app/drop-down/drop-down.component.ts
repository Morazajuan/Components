import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  dropDownArr=[1,2,3,4,5];


  constructor() { }

  ngOnInit() {
  }
  
}
