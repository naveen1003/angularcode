import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Data } from 'src/app/data';

@Component({
  selector: 'app-sprintdata',
  templateUrl: './sprintdata.component.html',
  styleUrls: ['./sprintdata.component.css']
})
export class SprintDataComponent implements OnInit {

  constructor(private http: HttpClient) { }

  projectList = <any>[];
  sprintList = <any>[];
  selectedProject = "";
  selectedSprint = "";
  sprintWorkItemDetails = {};
  storynewstate = 0;
  storyclosedstate = 0;
  storyactivestate = 0;
  totalstories = 0;
  defectnewstate = 0;
  defectclosedstate = 0;
  defectactivestate = 0;
  totaldefects = 0;
  sprintStartDate: Date = new Date();
  sprintEndDate: Date = new Date();
  workItemTagObject = {
    "DEV": 0,
    "QA": 0,
    "UAT": 0,
    "PROD": 0
  };

  ngOnInit() {
  }

  groupTags () {
    this.workItemTagObject = {
      "DEV": 0,
      "QA": 0,
      "UAT": 0,
      "PROD": 0
    };

    if(Data.getSprintWorkItemDetails() && Data.getSprintWorkItemDetails()["workItemTags"] &&
      Object.keys(Data.getSprintWorkItemDetails()["workItemTags"]) &&
      Object.keys(Data.getSprintWorkItemDetails()["workItemTags"]).length > 0) {

      Object.keys(Data.getSprintWorkItemDetails()["workItemTags"]).forEach(key => {
        this.workItemTagObject[key] = Data.getSprintWorkItemDetails()["workItemTags"][key]
      });
    }
  }

  setRequiredParameters() {
    this.projectList = Data.getProjectList();
    this.sprintList = Data.getSprintList();

    this.selectedProject = Data.getSelectedProject();
    this.selectedSprint = Data.getSelectedSprint();
    this.sprintStartDate = Data.getSprintStartDate();
    this.sprintEndDate = Data.getSprintEndDate();

    this.storynewstate = Data.getSprintWorkItemDetails()["storynewstate"];
    this.storyclosedstate = Data.getSprintWorkItemDetails()["storyclosedstate"];
    this.storyactivestate = Data.getSprintWorkItemDetails()["storyactivestate"];
    this.totalstories = Data.getSprintWorkItemDetails()["totalstories"];

    this.defectnewstate = Data.getSprintWorkItemDetails()["defectnewstate"];
    this.defectclosedstate = Data.getSprintWorkItemDetails()["defectclosedstate"];
    this.defectactivestate = Data.getSprintWorkItemDetails()["defectactivestate"];
    this.totaldefects = Data.getSprintWorkItemDetails()["totaldefects"];
  }

  setSprintListAndSelectedSprint() {
    // console.log("setSprintListAndSelectedSprint")
    this.http.get(Data.getBackendBaseUrl() + "/api/getProjectSprintList?appName=" + Data.getSelectedApp() + "&project=" + Data.getSelectedProject()).subscribe(getProjectResp => {
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
    this.http.get(Data.getBackendBaseUrl() + "/api/getSprintWorkItemList?appName=" + Data.getSelectedApp() + "&sprintId=" + Data.getSprintDatesData()[Data.getSelectedSprint()]["id"]).subscribe(getSprintResp => {
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

  ngDoCheck() {
    this.setRequiredParameters();
    this.groupTags()
  }

  selectProject(project) {
    // console.log("selectProject: ", project);
    Data.setSelectedProject(project);

    this.setSprintListAndSelectedSprint()
  }

  selectSprint(sprint) {
    // console.log("selectSprint: ", sprint);
    Data.setSelectedSprint(sprint);
    Data.setSprintStartDate(Data.getSprintDatesData()[Data.getSelectedSprint()]["startdate"]);
    Data.setSprintEndDate(Data.getSprintDatesData()[Data.getSelectedSprint()]["enddate"]);

    this.setWorkItemDetailsForSprint();
  }
}
