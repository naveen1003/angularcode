import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';
import { HttpClient } from "@angular/common/http";
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.css']
})
export class ApplistComponent implements OnInit {

  constructor(private http: HttpClient) { }

  appList = [];
  industryList = [];
  instanceList = [];
  selectedApp = "";
  selectedIndustry = "";
  selectedInstance = "";
  selectedProject = "";
  selectedSprint = "";
  industryDropdownState = false;
  instanceDropdownState = false;
  appDropDownState = false;
  projDropdownState = false;
  sprintDropdownState = false;
  selectIndustryMouseoverIndex;
  selectInstanceMouseoverIndex;
  selectAppMouseoverIndex;
  selectProjectMouseoverIndex;
  selectSprintMouseoverIndex;
  projectListObjArray = <any>[];
  projectList = <any>[];
  sprintList = <any>[];
  sprintListObjArray = <any>[];
  sprintStartDate: Date = new Date();
  sprintEndDate: Date = new Date();
  sprintId = "";
  sprintWorkItemDetails = <any>[];
  sprintWorkItemDataDetails = <any>[];

  ngOnInit() {
  }

  setRequiredParameters() {
    // Dropdown Lists
    this.industryList = Data.getIndustryList();
    this.instanceList = Data.getSelectedInstanceList();
    this.appList = Data.getSelectedAppsList();
    this.projectList = Data.getProjectList();
    this.sprintList = Data.getSprintList();

    // Selected Parameters
    this.selectedIndustry = Data.getSelectedIndustry();
    this.selectedInstance = Data.getSelectedInstance();
    this.selectedApp = Data.getSelectedApp().split('--')[2];
    this.selectedProject = Data.getSelectedProject();
    this.selectedSprint = Data.getSelectedSprint();
    this.sprintStartDate = Data.getSprintStartDate();
    this.sprintEndDate = Data.getSprintEndDate();
  }

  ngDoCheck() {
    this.setRequiredParameters()
  }

  disableDropdowns() {
    this.industryDropdownState = false;
    this.instanceDropdownState = false;
    this.appDropDownState = false;
    this.projDropdownState = false;
    this.sprintDropdownState = false;
  }

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

  selectIndustry(industry) {
    // console.log("selectIndustry: ", industry)
    Data.setSelectedIndustry(industry);

    var app = Data.getOneIndustryAppList(Data.getSelectedIndustry())[0];

    Data.setSelectedInstance(app.split("--")[1]);
    Data.setSelectedApp(app);

    Data.setSelectedInstanceList(Data.getOneIndustryInstanceList(Data.getSelectedIndustry()));
    Data.setSelectedAppsList(Data.getOneIndustryInstanceAppList(Data.getSelectedIndustry() + '_' + Data.getSelectedInstance()));

    this.setProjectListAndSelectedProject();

    this.disableDropdowns();
  }

  selectInstance(instance) {
    // console.log("selectInstance: ", instance)
    Data.setSelectedInstance(instance);

    var app = Data.getOneIndustryInstanceAppList(Data.getSelectedIndustry() + '_' + Data.getSelectedInstance())[0];

    Data.setSelectedApp(app);

    Data.setSelectedAppsList(Data.getOneIndustryInstanceAppList(Data.getSelectedIndustry() + '_' + Data.getSelectedInstance()));

    this.setProjectListAndSelectedProject();

    this.disableDropdowns();
  }

  selectApp(app) {
    // console.log("selectApp: ", app)
    Data.setSelectedApp(app);

    this.setProjectListAndSelectedProject();

    this.disableDropdowns();
  }

  selectProject(project) {
    // console.log("selectProject: ", project);
    Data.setSelectedProject(project);

    this.setSprintListAndSelectedSprint()

    this.disableDropdowns();
  }

  selectSprint(sprint) {
    // console.log("selectSprint: ", sprint);
    Data.setSelectedSprint(sprint);
    Data.setSprintStartDate(Data.getSprintDatesData()[Data.getSelectedSprint()]["startdate"]);
    Data.setSprintEndDate(Data.getSprintDatesData()[Data.getSelectedSprint()]["enddate"]);

    this.setWorkItemDetailsForSprint();

    this.disableDropdowns();
  }

  toggleIndustryDropdown(industryState) {
    this.disableDropdowns();
    this.industryDropdownState = industryState;
  }

  toggleInstanceDropdown(instanceState) {
    this.disableDropdowns();
    this.instanceDropdownState = instanceState;
  }

  toggleAppDropdown(appState) {
    this.disableDropdowns();
    this.appDropDownState = appState;
  }

  toggleProjectDropdown(projectState) {
    this.disableDropdowns();
    this.projDropdownState = projectState;
  }

  toggleSprintDropdown(sprintState) {
    this.disableDropdowns();
    this.sprintDropdownState = sprintState;
  }

  selectIndustryMouseover(index) {
    this.selectIndustryMouseoverIndex = index;
  }

  selectInstanceMouseover(index) {
    this.selectInstanceMouseoverIndex = index;
  }

  selectAppMouseover(index) {
    this.selectAppMouseoverIndex = index;
  }

  selectProjectMouseover(index) {
    this.selectProjectMouseoverIndex = index;
  }

  selectSprintMouseover(index) {
    this.selectSprintMouseoverIndex = index;
  }

  mouseLeave() {
    this.selectIndustryMouseoverIndex = -2;
    this.selectInstanceMouseoverIndex = -2;
    this.selectAppMouseoverIndex = -2;
    this.selectProjectMouseoverIndex = -2;
    this.selectSprintMouseoverIndex = -2;
  }

}
