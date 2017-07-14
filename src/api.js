import request from "request";
import { fetchAppsRequest, fetchAppsSuccess, fetchAppsFailure } from "actions/";

function getAppList() {
  return new Promise((resolve, reject) => {
    fetchAppsRequest();
    request("localhost:2000/getApps", function(error, response, body) {
      if (error) {
        reject(error);
        return;
      }

      const appList = JSON.parse(body);
      resolve(appList);
    });
  });
}
