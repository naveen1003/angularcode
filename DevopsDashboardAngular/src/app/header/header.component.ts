import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Data } from '../data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  appList = [];
  industryList = [];
  instanceList = [];

  ngOnInit() {}

  setProjectListAndSelectedProject() {
    // console.log("setProjectListAndSelectedProject")
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
    });
  }

  setSprintListAndSelectedSprint() {
    // console.log("setSprintListAndSelectedSprint")
    this.http.get(Data.getBackendBaseUrl() + "/api/getProjectSprintList?appName=" + Data.getSelectedApp() + "&&project=" + Data.getSelectedProject()).subscribe(getProjectResp => {
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
    });
  }

  setWorkItemDetailsForSprint () {
    // console.log("setWorkItemDetailsForSprint")
    this.http.get(Data.getBackendBaseUrl() + "/api/getSprintWorkItemList?appName=" + Data.getSelectedApp() + "&&sprintId=" + Data.getSprintDatesData()[Data.getSelectedSprint()]["id"]).subscribe(getSprintResp => {
      var sprintWorkItemDataDetails = [];
      var sprintWorkItemDetails = <any>[];
      sprintWorkItemDetails = getSprintResp
      sprintWorkItemDetails.forEach(sprdata => {
        sprintWorkItemDataDetails.push(sprdata);
      })

      Data.setSprintWorkItemDetails(sprintWorkItemDataDetails[0]);

      this.setRequiredParameters()
    });
  }

  setRequiredParameters() {
    // Dropdown Lists
    this.industryList = Data.getIndustryList();
    this.instanceList = Data.getSelectedInstanceList();
    this.appList = Data.getSelectedAppsList();
  }

  ngDoCheck() {
    this.setRequiredParameters()
  }

  selectIndustry(industry) {
    // console.log("selectIndustry: ", industry)
    Data.setSelectedIndustry(industry);

    var app = Data.getOneIndustryAppList(Data.getSelectedIndustry())[0];

    Data.setSelectedInstance(app.split("--")[1]);
    Data.setSelectedApp(app);

    Data.setSelectedInstanceList(Data.getOneIndustryInstanceList(Data.getSelectedIndustry()));
    Data.setSelectedAppsList(Data.getOneIndustryInstanceAppList(Data.getSelectedIndustry() + '_' + Data.getSelectedInstance()));

    this.setProjectListAndSelectedProject();
  }

  selectInstance(instance) {
    // console.log("selectInstance: ", instance)
    Data.setSelectedInstance(instance);

    var app = Data.getOneIndustryInstanceAppList(Data.getSelectedIndustry() + '_' + Data.getSelectedInstance())[0];

    Data.setSelectedApp(app);

    Data.setSelectedAppsList(Data.getOneIndustryInstanceAppList(Data.getSelectedIndustry() + '_' + Data.getSelectedInstance()));

    this.setProjectListAndSelectedProject();
  }

  selectApp(app) {
    // console.log("selectApp: ", app)
    Data.setSelectedApp(app);

    this.setProjectListAndSelectedProject();
  }

}
