import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-continuousdeployment',
  templateUrl: './continuousdeployment.component.html',
  styleUrls: ['./continuousdeployment.component.css']
})
export class ContinuousdeploymentComponent implements OnInit {

  constructor() { }

  cdDataList = []

  ngOnInit() {
  }

  ngDoCheck() {
    this.cdDataList = Data.getOneCdAppEnvData(Data.getSelectedApp() + '_' + Data.getSelectedEnv())
    if(this.cdDataList && this.cdDataList.length > 0)
      this.cdDataList = this.cdDataList.slice(0,5)
  }

  getDeploymentStatus(deploymentStatus) {
    if(deploymentStatus == "Deployed Successfully")
      return "Success";
    else
      return "Failed";
  }

}
