"use strict";


window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String} */ APP_ID = "438677e8";
const /** {String} */ API_KEY = "7a5ee1fd6ae47e4fc6108f88a93facd6";
const /** {String} */ TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries, successCallback) {
  const query = queries?.map(q => q.join("=")).join("&");


  const /** {String} */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

  const response = await fetch(url, {
    headers: {
      "Edamam-Account-User": "alienxviking"
    }
  });

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }
}
