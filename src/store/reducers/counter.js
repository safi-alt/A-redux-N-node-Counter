import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });

    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });

    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });

    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });
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
