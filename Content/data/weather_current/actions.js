import * as actionType from "./action-types";
import { isAllDataFetched } from "../root-functions";

const requestData = (cityName) => {
  return {
    type: actionType.REQUEST_DATA,
    cityName
  };
};

const receiveData = (weatherJSON) => {
  
};

const stillNeedData = (state) => {
  return !isAllDataFetched(state);
};

const fetchData = () => {
  return (dispatch) => {

  };
};

export const loadDataIfNeeded = () => {
  return (dispatch, getState) => {
    if (stillNeedData(getState())) {
      return dispatch(fetchData());
    }
  };
};

