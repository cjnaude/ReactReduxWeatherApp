import * as actionType from "./action-types";
import * as wcActionTypes from "../weather_current/action-types";

const initialState = {
  activePage: 0,
  isFetchingWeatherCurrent: false,
  isFetchingWeatherHistory: false,
  isFetchingWeatherForecast: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GOTO_PAGE: {
      return {...state, activePage: action.pageIndex};
    }
    case wcActionTypes.REQUEST_DATA: {
      return {...state, isFetchingWeatherCurrent: true};
    }
    case wcActionTypes.RECEIVE_DATA: {
      return {...state, isFetchingWeatherCurrent: action.isStillFetching};
    }
    default: {
      return state;
    }
  }
};

export default ui;

export const getActivePage = (state) => {
  return state.activePage;
};