import * as actionType from "./action-types";
import { isEmpty } from "../../util";

const initialState = {
  allDataFetched: false,
  data: {
    "Johannesburg": {},
    "Barendrecht": {},
    "Port Elizabeth": {}
  }
};

const checkIfAllDataIsFetched = (cityData, cityJustUpdated) => {
  for (let city in cityData){
    if (cityData.hasOwnProperty(city)) {
      if ((isEmpty(cityData[city])) && (city !== cityJustUpdated)) {
        return false;
      }
    }
  }
  return true;
};

const weatherCurrent = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REQUEST_DATA: {
      return {...state, allDataFetched: false};
    }
    case actionType.RECEIVE_DATA: {
      let updatedAllDataFetched = checkIfAllDataIsFetched(state.data, action.cityName);
      return {...state, 
        data: {...state.data, [action.cityName]: action.weatherData},
        allDataFetched: updatedAllDataFetched
      };
    }
    default: {
      return state;
    }
  }
};

export default weatherCurrent;

export const isAllDataFetched = (state) => {
  return state.allDataFetched;
};

export const getWeatherData = (state) => {
  return state.data;
};