import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

  constructor() { }

  envList = []
  selectedEnv = "";

  ngOnInit() {
    this.updateSelectedEnv();
  }

  ngDoCheck() {
    this.envList = Data.getAppEnvList(Data.getSelectedApp())
    this.selectedEnv = Data.getSelectedEnv();
  }

  getColClass() {
    switch (this.envList.length) {
      case 1:
        return "col-lg-12 col-md-12 col-sm-12 col-xs-12";

      case 2:
        return "col-lg-6 col-md-6 col-sm-6 col-xs-6";

      case 3:
        return "col-lg-4 col-md-4 col-sm-4 col-xs-4";

      case 4:
        return "col-lg-3 col-md-3 col-sm-3 col-xs-3";

      case 5:
        return "col-lg-2 col-md-2 col-sm-2 col-xs-2";

      case 6:
        return "col-lg-2 col-md-2 col-sm-2 col-xs-2";
    
      default:
        break;
    }
  }

  selectEnv(env) {
    Data.setSelectedEnv(env)

    this.updateSelectedEnv();
  }

  updateSelectedEnv () {
    
    // Update selected tags in data
    var cdDataList = Data.getOneCdAppEnvData(Data.getSelectedApp() + '_' + Data.getSelectedEnv())
    if(cdDataList && cdDataList.length > 0) {
      cdDataList = cdDataList.slice(0,5)

      var recentTags = cdDataList.map(dataElement => {
        return dataElement.tagDeployed
      })

      Data.setSelectedRecentTags(recentTags)
      Data.setSelectedTag(0)
    }

  }

}
