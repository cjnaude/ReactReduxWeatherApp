import * as React from "react";
import NavLinkItem from "../containers/nav-link-item";

const NavMenu = ({activePageIndex}) => (
  <div className="main-nav">
    <div className="navbar navbar-inverse">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">WeatherApp</a>
      </div>
      <div className="clearfix"></div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <NavLinkItem 
            index={0}
            activePageIndex={activePageIndex}
          >
            <span className="glyphicon glyphicon-cloud"></span> Current
          </NavLinkItem>
          <NavLinkItem 
            index={1}
            activePageIndex={activePageIndex}
          >
            <span className="glyphicon glyphicon-cloud"></span> Forecast
          </NavLinkItem>
          <NavLinkItem 
            index={2}
            activePageIndex={activePageIndex}
          >
            <span className="glyphicon glyphicon-cloud"></span> Historic
          </NavLinkItem>
        </ul>
      </div>
    </div>
  </div>
);

export default NavMenu;