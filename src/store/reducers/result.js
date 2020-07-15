import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // Change DATA
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2,
        }),
      });

    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      return deleteResult(state, action);
  }

  // if (action.type === "INCREMENT") {
  // }
  // if (action.type === "DECREMENT") {
  // }
  // if (action.type === "ADD") {
  // }
  // if (action.type === "SUBTRACT") {
  // }

  return state;
};

export default reducer;
