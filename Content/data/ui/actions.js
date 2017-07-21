import * as actionType from "./action-types";

export const goToPage = (pageIndex) => {
  return {
    type: actionType.GOTO_PAGE,
    pageIndex
  };
};