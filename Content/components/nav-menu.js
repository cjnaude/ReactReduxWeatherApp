import * as React from "react";
import NavLinkItem from "../containers/nav-link-item";

const NavMenu = ({activePageIndex, onClick}) => (
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
            <span className="glyphicon glyphicon-home"></span> Home
          </NavLinkItem>
          <NavLinkItem 
            index={1}
            activePageIndex={activePageIndex}
          >
            <span className="glyphicon glyphicon-star"></span> Page 2
          </NavLinkItem>
          <NavLinkItem 
            index={2}
            activePageIndex={activePageIndex}
          >
            <span className="glyphicon glyphicon-leaf"></span> Page 3
          </NavLinkItem>
        </ul>
      </div>
    </div>
  </div>
);

export default NavMenu;