import React from "react";
import { connect } from "react-redux";
import NavMenu from "../components/nav-menu";
import PageContent from "./page-content";
import { getActivePage } from "../data/root-functions";

let App = ({activePageIndex}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <NavMenu activePageIndex={activePageIndex} />
        </div>
        <div className="col-sm-9">
          <PageContent activePageIndex={activePageIndex} /> 
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const activePageIndex = getActivePage(state);
  return {
    activePageIndex
  };
};

App = connect(
  mapStateToProps
)(App);

export default App;