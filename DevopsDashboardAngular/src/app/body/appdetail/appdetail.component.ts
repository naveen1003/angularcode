import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-appdetail',
  templateUrl: './appdetail.component.html',
  styleUrls: ['./appdetail.component.css']
})
export class AppdetailComponent implements OnInit {

  constructor() { }

  selectedApp = "";

  ngOnInit() { 
  }

  ngDoCheck() {
    if(Data.getSelectedAppsList() && Data.getSelectedAppsList().length > 0)
      this.selectedApp = Data.getSelectedAppsList()[0];
  }

}

