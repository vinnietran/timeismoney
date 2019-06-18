import {
  ADD_TIME,
  DELETE_TIME,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TIME,
  FILTER_TIMES,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TIME:
      return {
        ...state,
        time: [...state.time, action.payload]
      };
    default:
      return state;
  }
};
