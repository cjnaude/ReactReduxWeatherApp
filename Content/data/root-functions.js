import { combineReducers } from "redux";
import _ui from "./ui";
import _weatherCurrent from "./weather_current";

const todoApp = combineReducers({
  ui: _ui.reducer,
  weatherCurrent: _weatherCurrent.reducer
});


export default todoApp;

// ------------- Selectors ---------------
//UI
export const getActivePage = (state) => _ui.selectors.getActivePage(state.ui);

//Weather Current
export const isAllDataFetched = (state) => _weatherCurrent.isAllDataFetched(state.weatherCurrent);
