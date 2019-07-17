import { Component } from '@angular/core';
import { Data } from './data';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  updateSelectedEnv () {
    
    // Update selected tags in data
    var cdDataList = Data.getOneCdAppEnvData(Data.getSelectedApp() + '_' + Data.getSelectedEnv())
    cdDataList = cdDataList.slice(0,5)

    var recentTags = cdDataList.map(dataElement => {
      return dataElement.tagDeployed
    })

    Data.setSelectedRecentTags(recentTags)
    Data.setSelectedTag(0)

  }

  setProjectListAndSelectedProject () {
    this.http.get(Data.getBackendBaseUrl() + "/api/getAppProjectList?selectedAppName=" + Data.getSelectedApp()).subscribe(getAppResp => {
      var projectList = <any>[];
      var projectListObjArray = <any>[];
      projectListObjArray = getAppResp;

      projectListObjArray.forEach(element => {
        projectList.push(element.name);
      });

      Data.setProjectList(projectList);
      Data.setSelectedProject(Data.getProjectList()[0]);

      this.setSprintListAndSelectedSprint();

      // Debug Log
      console.log("14: getProjectList");
      console.log(Data.getProjectList());
      console.log("15: getSelectedProject");
      console.log(Data.getSelectedProject());
    });
  }

  setSprintListAndSelectedSprint () {
    this.http.get(Data.getBackendBaseUrl() + "/api/getProjectSprintList?appName=" + Data.getSelectedApp() + "&&project=" + Data.getSelectedProject()).subscribe(getProjectResp => {

      console.log("Sprint Data")
      console.log(getProjectResp)
      var sprintList = <any>[];
      var sprintListObjArray = <any>[];
      var sprintDatesData = {};

      sprintListObjArray = getProjectResp;

      sprintListObjArray.forEach(element => {
        sprintList.push(element.name);
        sprintDatesData[element.name] = element
      });

      Data.setSprintList(sprintList);
      Data.setSelectedSprint(Data.getSprintList()[0]);
      Data.setSprintDatesData(sprintDatesData);
      Data.setSprintStartDate(Data.getSprintDatesData()[Data.getSelectedSprint()]["startdate"])
      Data.setSprintEndDate(Data.getSprintDatesData()[Data.getSelectedSprint()]["enddate"])

      this.setWorkItemDetailsForSprint();

      // Debug Log
      console.log("16: getSprintList");
      console.log(Data.getSprintList());
      console.log("17: getSelectedSprint");
      console.log(Data.getSelectedSprint());
      console.log("18: getSprintDatesData");
      console.log(Data.getSprintDatesData());
      console.log("19: getSprintStartDate");
      console.log(Data.getSprintStartDate());
      console.log("20: getSprintEndDate");
      console.log(Data.getSprintEndDate());
    });
  }

  setWorkItemDetailsForSprint () {
    this.http.get(Data.getBackendBaseUrl() + "/api/getSprintWorkItemList?appName=" + Data.getSelectedApp() + "&&sprintId=" + Data.getSprintDatesData()[Data.getSelectedSprint()]["id"]).subscribe(getSprintResp => {
      var sprintWorkItemDataDetails = [];
      var sprintWorkItemDetails = <any>[];
      sprintWorkItemDetails = getSprintResp
      sprintWorkItemDetails.forEach(sprdata => {
        sprintWorkItemDataDetails.push(sprdata);
      })

      Data.setSprintWorkItemDetails(sprintWorkItemDataDetails[0]);

      // Debug Log
      console.log("21: getSprintWorkItemDetails");
      console.log(Data.getSprintWorkItemDetails());
    });
  }

  ngOnInit() {
    var appList = [];
    var industryInstanceList = {};
    var industryAppList = {};
    var industryInstanceAppList = {};
    var appData = <any>[];

    var ciData = <any>[];
    var cdData = <any>[];
    var appTagCiData = {};
    var appEnvMapping = {};
    var appEnvCdData = {};

    this.http.get(Data.getBackendBaseUrl() + "/api/getApps").subscribe(getAppResp => {
      appData = getAppResp;

      appData.forEach(appElement => {

        var appElementIndustry = appElement.name.split('--')[0];
        var appElementInstance = appElement.name.split('--')[1];
        var appElementAppName = appElement.name.split('--')[2];

        if (appElement.name && appElement.name != "" &&
          appElementIndustry && appElementIndustry != "" &&
          appElementInstance && appElementInstance != "" &&
          appElementAppName && appElementAppName != "") {

          appList.push(appElement.name)

          // Industry Instance Mapping
          if (!industryInstanceList[appElementIndustry])
            industryInstanceList[appElementIndustry] = []

          if (industryInstanceList[appElementIndustry].indexOf(appElementInstance) == -1)
            industryInstanceList[appElementIndustry].push(appElementInstance);

          // Industry App List Mapping
          if (!industryAppList[appElementIndustry])
            industryAppList[appElementIndustry] = []

          if (industryAppList[appElementIndustry].indexOf(appElement.name) == -1)
            industryAppList[appElementIndustry].push(appElement.name);

          // Industry Instance App List Mapping
          if (!industryInstanceAppList[appElementIndustry + "_" + appElementInstance])
            industryInstanceAppList[appElementIndustry + "_" + appElementInstance] = []

          if (industryInstanceAppList[appElementIndustry + "_" + appElementInstance].indexOf(appElement.name) == -1)
            industryInstanceAppList[appElementIndustry + "_" + appElementInstance].push(appElement.name);

        }

      })

      this.http.get(Data.getBackendBaseUrl() + "/api/CiData").subscribe(ciResp => {
        ciData = ciResp;

        this.http.get(Data.getBackendBaseUrl() + "/api/cDdata").subscribe(cDResp => {
          cdData = cDResp;

          // Process CI Data
          ciData.forEach(ciElement => {
            appTagCiData[ciElement.appName.replace(/_/g, "") + '_' + ciElement.GitTag] = ciElement
          })

          // Process CD Data
          cdData.forEach(cdDataElement => {

            var cdDataElementIndustry = cdDataElement.appName.split('--')[0];
            var cdDataElementInstance = cdDataElement.appName.split('--')[1];
            var cdDataElementAppName = cdDataElement.appName.split('--')[2];

            if (cdDataElement.appName != "" && cdDataElementAppName != "") {

              // Set App and Env Mapping
              if (!appEnvMapping[cdDataElement.appName.replace(/_/g, "")])
                appEnvMapping[cdDataElement.appName.replace(/_/g, "")] = []

              if (appEnvMapping[cdDataElement.appName.replace(/_/g, "")].indexOf(cdDataElement.environmentName) == -1)
                appEnvMapping[cdDataElement.appName.replace(/_/g, "")].push(cdDataElement.environmentName)

              // Set App Env Mapping CD Data
              if (!appEnvCdData[cdDataElement.appName.replace(/_/g, "") + '_' + cdDataElement.environmentName])
                appEnvCdData[cdDataElement.appName.replace(/_/g, "") + '_' + cdDataElement.environmentName] = []

              appEnvCdData[cdDataElement.appName.replace(/_/g, "") + '_' + cdDataElement.environmentName].push(cdDataElement)

            }
          })

          // Sort Deployments by Timestamp Desc Order in App Env Mapped CD Data
          Object.keys(appEnvCdData).forEach(key => {
            appEnvCdData[key].sort((val1, val2) => {
              return <any>new Date(val2.DeployedTime) - <any>new Date(val1.DeployedTime)
            })
          })

          // Set all the values to Data Class
          Data.setAppList(appList);
          Data.setIndustryInstanceList(industryInstanceList);
          Data.setIndustryAppList(industryAppList);
          Data.setIndustryInstanceAppList(industryInstanceAppList);
          Data.setAppEnvMapping(appEnvMapping);
          Data.setCdAppEnvData(appEnvCdData);
          Data.setCiGitData(appTagCiData);

          Data.setSelectedIndustry(appList[0].split('--')[0]);
          Data.setSelectedInstance(appList[0].split('--')[1]);
          Data.setSelectedInstanceList(Data.getOneIndustryInstanceList(Data.getSelectedIndustry()))
          Data.setSelectedAppsList(Data.getOneIndustryInstanceAppList(Data.getSelectedIndustry() + '_' + Data.getSelectedInstance()));
          Data.setSelectedApp(appList[0]);
          Data.setSelectedEnv(appEnvMapping[appList[0]][0]);

          this.updateSelectedEnv();
          this.setProjectListAndSelectedProject();

          // Debug Log
          console.log("1: getAppList")
          console.log(Data.getAppList());
          console.log("2: getIndustryInstanceList")
          console.log(Data.getIndustryInstanceList());
          console.log("3: getIndustryAppList")
          console.log(Data.getIndustryAppList());
          console.log("4: getIndustryInstanceAppList")
          console.log(Data.getIndustryInstanceAppList())
          console.log("5: getAppEnvMapping");
          console.log(Data.getAppEnvMapping());
          console.log("6: getCdAppEnvData");
          console.log(Data.getCdAppEnvData());
          console.log("7: getCiAppTagData");
          console.log(Data.getCiAppTagData());
          console.log("8: getSelectedIndustry")
          console.log(Data.getSelectedIndustry());
          console.log("9: getSelectedInstance")
          console.log(Data.getSelectedInstance())
          console.log("10: getSelectedInstanceList")
          console.log(Data.getSelectedInstanceList())
          console.log("11: getSelectedAppsList")
          console.log(Data.getSelectedAppsList());
          console.log("12: getSelectedApp");
          console.log(Data.getSelectedApp())
          console.log("13: getSelectedEnv");
          console.log(Data.getSelectedEnv())
        });
      });

    });

  }

}
