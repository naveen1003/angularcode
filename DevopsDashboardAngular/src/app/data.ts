import { Environment } from "./environment";

// industry === pod
// instance === org

var appList = [];
var projectList = [];
var sprintList = [];
var industryInstanceList = {};
var industryAppList = {};
var industryInstanceAppList = {};
var appEnvMapping = {};
var cdAppEnvData = {};
var ciAppTagData = {};

// Selected Details
var selectedInstanceList = [];
var selectedAppsList = [];
var selectedIndustry = "";
var selectedInstance = "";
var selectedApp = "";
var selectedProject = "";
var selectedSprint = "";
var selectedEnv = "";
var selectedTag = 0;
var selectedRecentTags = [];
var selectedSprintDates = {};
var sprintWorkItemDetails = {};

var sprintStartDate: Date = new Date();
var sprintEndDate: Date = new Date();

const BACKEND_BASE_URL = Environment.getBackendBaseUrl();

export class Data {

    public static getBackendBaseUrl = function () {
        return BACKEND_BASE_URL;
    }

    /*Left Filter Menu Display Attributes*/

    // Pods : selectedIndustry (display value)
    public static setSelectedIndustry = function (selectedIndustryRequest) { // sets user selected or default industry
        selectedIndustry = selectedIndustryRequest;
    }

    public static getSelectedIndustry = function () { // returns user selected or default industry
        return selectedIndustry;
    }

    // Orgs : selectedInstance (display value)
    public static setSelectedInstance = function (selectedInstanceRequest) { // sets user selected or default instance
        selectedInstance = selectedInstanceRequest;
    }

    public static getSelectedInstance = function () { // returns user selected or default instance
        return selectedInstance;
    }

    // Vsts_App : selectedApp (display value)
    public static setSelectedApp = function (selectedAppRequest) { // sets user selected or default app
        selectedApp = selectedAppRequest;
    }

    public static getSelectedApp = function () { // returns user selected or default app
        return selectedApp;
    }

    // Project : selectedProject (display value)
    public static setSelectedProject = function (selectedProjectRequest) { // sets user selected or default project
        selectedProject = selectedProjectRequest;
    }

    public static getSelectedProject = function () { // returns user selected or default project
        return selectedProject;
    }

    // Sprint : selectedSprint (display value)
    public static setSelectedSprint = function (selectedSprintRequest) { // sets user selected or default sprint
        selectedSprint = selectedSprintRequest;
    }

    public static getSelectedSprint = function () { // returns user selected or default sprint
        return selectedSprint;
    }

    // Start Date : sprintStartDate (display value)
    public static setSprintStartDate = function (sprintStartDateRequest) { // sets sprint start date
        sprintStartDate = sprintStartDateRequest;
    }

    public static getSprintStartDate = function () { // returns sprint start date
        return sprintStartDate;
    }

    // End Date : sprintEndDate (display value)
    public static setSprintEndDate = function (sprintEndDateRequest) { // sets sprint end date
        sprintEndDate = sprintEndDateRequest;
    }

    public static getSprintEndDate = function () { // returns sprint end date
        return sprintEndDate;
    }

    // Orgs : selectedInstanceList (Orgs dropdown menu list)
    public static setSelectedInstanceList = function (selectedInstanceListRequest) { // sets Orgs dropdown menu list
        selectedInstanceList = selectedInstanceListRequest
    }

    public static getSelectedInstanceList = function () { // returns Orgs dropdown menu list
        return selectedInstanceList
    }

    // Vsts_App : selectedAppsList (Vsts_App dropdown menu list)
    public static setSelectedAppsList = function (selectedAppsListRequest) { // sets Vsts_App dropdown menu list
        selectedAppsList = selectedAppsListRequest;
    }

    public static getSelectedAppsList = function () { // returns Vsts_App dropdown menu list
        return selectedAppsList;
    }

    // Project : projectList (Project dropdown menu list)
    public static setProjectList = function (projectListRequest) { // sets project dropdown menu list
        projectList = projectListRequest;
    }

    public static getProjectList = function () { // returns project dropdown menu list
        return projectList;
    }

    // Sprint : sprintList (Sprint dropdown menu list)
    public static setSprintList = function (sprintListRequest) { // sets sprint dropdown menu list
        sprintList = sprintListRequest;
    }

    public static getSprintList = function () { // returns sprint dropdown menu list
        return sprintList;
    }

    /*Left Filter Menu Attributes*/







    // appList
    public static setAppList = function (appListRequest) { // sets all apps list
        appList = appListRequest;
    }

    public static getAppList = function () { // returns all apps list
        return appList;
    }

    // industryInstanceList
    public static setIndustryInstanceList = function (industryInstanceListRequest) { // sets industry instance mapping
        industryInstanceList = industryInstanceListRequest;
    }

    public static getIndustryInstanceList = function () { // returns industry instance mapping
        return industryInstanceList;
    }

    public static getOneIndustryInstanceList = function (industryRequest) { // returns instances list for one industry
        return industryInstanceList[industryRequest];
    }

    public static getIndustryList = function () { // returns list of industries
        return Object.keys(industryInstanceList);
    }


    // industryAppList
    public static setIndustryAppList = function (industryAppListRequest) {
        industryAppList = industryAppListRequest;
    }

    public static getIndustryAppList = function () {
        return industryAppList;
    }

    public static getOneIndustryAppList = function (industryRequest) {
        return industryAppList[industryRequest];
    }


    // industryInstanceAppList
    public static setIndustryInstanceAppList = function (industryInstanceAppListRequest) {
        industryInstanceAppList = industryInstanceAppListRequest;
    }

    public static getIndustryInstanceAppList = function () {
        return industryInstanceAppList;
    }

    public static getOneIndustryInstanceAppList = function (industryInstanceRequest) {
        return industryInstanceAppList[industryInstanceRequest];
    }

    //project Selectedlist 

    public static setSelectedProjectList = function (ProjectRequest) {
        return industryInstanceAppList[ProjectRequest];
    }

    // appEnvMapping
    public static setAppEnvMapping = function (appEnvMappingRequest) {
        appEnvMapping = appEnvMappingRequest;
    }

    public static getAppEnvMapping = function () {
        return appEnvMapping;
    }

    public static getAppEnvList = function (appName) {
        return appEnvMapping[appName];
    }

    // cdAppEnvData
    public static setCdAppEnvData = function (cdAppEnvDataRequest) {
        cdAppEnvData = cdAppEnvDataRequest;
    }

    public static getCdAppEnvData = function () {
        return cdAppEnvData;
    }

    public static getOneCdAppEnvData = function (key) {
        return cdAppEnvData[key];
    }

    // ciGitData
    public static setCiGitData = function (ciAppTagDataRequest) {
        ciAppTagData = ciAppTagDataRequest;
    }

    public static getCiAppTagData = function () {
        return ciAppTagData;
    }

    public static getOneCiAppTagData = function (key) {
        return ciAppTagData[key];
    }

    // SprintDates for Selected Sprint
    public static setSprintDatesData = function (sprintDataRequest) {
        selectedSprintDates = sprintDataRequest;
    }

    public static getSprintDatesData = function () {
        return selectedSprintDates;
    }

    //WorkItemDetails for Selected Sprint
    public static setSprintWorkItemDetails = function (sprintWorkItemDetailsRequest) {
        sprintWorkItemDetails = sprintWorkItemDetailsRequest;
    }

    public static getSprintWorkItemDetails = function () {
        return sprintWorkItemDetails;
    }

    // selectedEnv
    public static setSelectedEnv = function (selectedEnvRequest) {
        selectedEnv = selectedEnvRequest;
    }

    public static getSelectedEnv = function () {
        return selectedEnv;
    }

    // selectedTag
    public static setSelectedTag = function (selectedTagRequest) {
        selectedTag = selectedTagRequest;
    }

    public static getSelectedTag = function () {
        return selectedTag;
    }

    // selectedRecentTags
    public static setSelectedRecentTags = function (selectedRecentTagsRequest) {
        selectedRecentTags = selectedRecentTagsRequest;
    }

    public static getSelectedRecentTags = function () {
        return selectedRecentTags;
    }

}