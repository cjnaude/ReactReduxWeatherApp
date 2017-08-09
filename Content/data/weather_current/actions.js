import * as actionType from "./action-types";
import { isAllDataFetched, getWeatherData } from "../root-functions";
import { isEmpty } from "../../util";

const requestData = () => {
  return {
    type: actionType.REQUEST_DATA
  };
};

const receiveData = (weatherJSON, cityName) => {
  return {
    type: actionType.RECEIVE_DATA,
    weatherData: weatherJSON.query.results.channel,
    cityName
  };
};

const stillNeedData = (state) => {
  return !isAllDataFetched(state);
};

const stillNeedDataForCity = (cityData) => {
  return isEmpty(cityData);
};

const fetchData = (cityName) => {
  let queryString = [
    "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22",
    cityName,
    "%22)&format=json"
  ];
  return (dispatch) => {
    return fetch(queryString.join())
      .then(response => response.json())
      .then(json => dispatch(receiveData(json, cityName)));
  };
};

export const loadDataIfNeeded = () => {
  return (dispatch, getState) => {
    let state = getState();
    if (stillNeedData(state)) {
      dispatch(requestData());

      let cityData = getWeatherData(state);
      for (let city in cityData){
        if ((cityData.hasOwnProperty(city)) && (stillNeedDataForCity(cityData[city]))) {
          dispatch(fetchData(city));
        }
      }
    }
  };
};

