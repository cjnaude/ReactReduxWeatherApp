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
export const isAppStarted = (state) => _ui.selectors.isAppStarted(state.ui);

//Weather Current
export const isAllDataFetched = (state) => _weatherCurrent.selectors.isAllDataFetched(state.weatherCurrent);
export const getWeatherData = (state) => _weatherCurrent.selectors.getWeatherData(state.weatherCurrent);