import * as React from "react";

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <li>
        <a 
          href="#"
          onClick={this._onClick}
          className={
            this.props.isActive ? "active" : ""
          }
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default NavLink;

