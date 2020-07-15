import * as actionTypes from "./actionTypes";

export const saveResults = (res) => {
  // const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storedResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResults(res));
    }, 2000);
  };
};
export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};
