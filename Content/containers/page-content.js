import React from "react";
import Home from "../components/home";
import { connect } from "react-redux";
import _weatherCurrent from "../data/weather_current";
import { isAllDataFetched, isAppStarted } from "../data/root-functions";

let PageContent = ({activePageIndex, isLoadingData, isDataLoaded, onStartClick}) => {
  if (!isDataLoaded) {
    return <Home 
      isLoadingData={isLoadingData}
      onStartClick={onStartClick}
    />;
  }
  
  switch (activePageIndex) {
    case 0: {
      return <p>Page1</p>;
    }
    case 1: {
      return <p>Page2</p>;
    }
    case 2: {
      return <p>Page3</p>;
    }
  }
  
};

const mapStateToProps = (state, ownProps) => {
  let isDataLoaded = isAllDataFetched(state);
  return {
    activePageIndex: ownProps.activePageIndex,
    isLoadingData: isAppStarted(state) && (!isAllDataFetched(state)),
    isDataLoaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => {
      dispatch(_weatherCurrent.actions.loadDataIfNeeded());
    }
  };
};

PageContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContent);

export default PageContent;