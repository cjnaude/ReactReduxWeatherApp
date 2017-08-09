import * as actionType from "./action-types";
import * as wcActionTypes from "../weather_current/action-types";

const initialState = {
  activePage: 0,
  isStarted: false
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GOTO_PAGE: {
      return {...state, activePage: action.pageIndex};
    }
    case wcActionTypes.REQUEST_DATA: {
      return {...state, isStarted: true};
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

export const isAppStarted = (state) => {
  return state.isStarted;
};