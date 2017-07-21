import { connect } from "react-redux";
import NavLink from "../components/nav-link";
import _ui from "../data/ui";

const mapStateToProps = (state, ownProps) => {
  let index = ownProps.index;
  let isActive = (index === ownProps.activePageIndex);
  return {
    index,
    isActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (pageIndex) => {
      dispatch(_ui.actions.goToPage(pageIndex));
    }
  };
};

const NavLinkItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLink);

export default NavLinkItem;