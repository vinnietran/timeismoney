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
        times: [...state.times, action.payload]
      };
      case DELETE_TIME:
          return{
              ...state, 
              times: state.times.filter(time => time.id !== action.payload)
          }
    default:
      return state;
  }
};
