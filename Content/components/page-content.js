import React from "react";
import Home from "./home";

const PageContent = ({activePageIndex}) => {
  switch (activePageIndex) {
    case 0: {
      return <Home />;
    }
    case 1: {
      return <p>Page2</p>;
    }
    case 2: {
      return <p>Page3</p>;
    }
    default: {
      return <Home />;
    }
  }
};

export default PageContent;