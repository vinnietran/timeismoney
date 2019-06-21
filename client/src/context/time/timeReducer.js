import {
  ADD_TIME,
  DELETE_TIME,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TIME,
  FILTER_TIMES,
  CLEAR_FILTER,
  TIME_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TIME:
      return {
        ...state,
        times: [...state.times, action.payload]
      };
    case UPDATE_TIME:
      return {
        ...state,
        times: state.times.map(time =>
          time.id === action.payload.id ? action.payload : time
        )
      };
    case DELETE_TIME:
      return {
        ...state,
        times: state.times.filter(time => time.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_TIMES:
      return {
        ...state,
        filtered: state.times.filter(time => {
          const regex = new RegExp(`${action.payload}`, "gi");
          //change this to employee name
          return time.month.match(regex) || time.client.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
      case TIME_ERROR:
      return {
        ...state, 
        error: action.payload
      };

    default:
      return state;
  }
};
