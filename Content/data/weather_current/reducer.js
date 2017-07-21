import * as actionType from "./action-types";

const initialState = {
  allDataFetched: false,
  "Johannesburg": {},
  "Barendrecht": {},
  "Port Elizabeth": {}
};

const weatherCurrent = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GOTO_PAGE: {
      return {...state, activePage: action.pageIndex};
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