const BACKEND_BASE_URL = "http://dashboardserver.southindia.cloudapp.azure.com:4200";

export class Environment {
    public static getBackendBaseUrl = function () {
        return BACKEND_BASE_URL;
    }
}