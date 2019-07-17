import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-continuousintegration',
  templateUrl: './continuousintegration.component.html',
  styleUrls: ['./continuousintegration.component.css']
})
export class ContinuousintegrationComponent implements OnInit {

  constructor() { }

  ciAppTagData = {
    "SeleniumTestsFailed" : "0",
    "blocker" : "0",
    "critical" : "0",
    "passRate" : "100%",
    "timeStamp": "2019-04-19:15:32:31"
  };
  selectedRecentTags = [];

  unitTestsOutcome = "";
  seleniumOutcome = "";
  sonarOutcome = "";
  dropdownState = false;
  selectTagMouseIndex;

  ngOnInit() {
  }

  ngDoCheck() {
    if(Data.getOneCiAppTagData(Data.getSelectedApp() + '_' + Data.getSelectedRecentTags()[Data.getSelectedTag()]))
      this.ciAppTagData = Data.getOneCiAppTagData(Data.getSelectedApp() + '_' + Data.getSelectedRecentTags()[Data.getSelectedTag()])
    this.selectedRecentTags = Data.getSelectedRecentTags()

    // unitTestsOutcome
    if(this.ciAppTagData && this.ciAppTagData.passRate && parseFloat(this.ciAppTagData.passRate.split("%")[0]) >= 85.0)
      this.unitTestsOutcome = "Passed"
    else
      this.unitTestsOutcome = "Failed"

    // seleniumOutcome
    if(this.ciAppTagData && this.ciAppTagData.SeleniumTestsFailed == "0")
      this.seleniumOutcome = "Passed"
    else
      this.seleniumOutcome = "Failed"

    // sonarOutcome
    if(this.ciAppTagData && this.ciAppTagData.blocker == "0" && this.ciAppTagData.critical == "0")
      this.sonarOutcome = "Passed"
    else
      this.sonarOutcome = "Failed"

  }

  toggleDropdown (state) {
    this.dropdownState = state;
  }

  selectTag (tag) {
    Data.setSelectedTag(Data.getSelectedRecentTags().indexOf(tag));
    this.dropdownState = false;
  }

  selectTagMouseOverIndex (index) {
    this.selectTagMouseIndex = index;
  }

  mouseLeave () {
    this.selectTagMouseIndex = -1;
  }

}
