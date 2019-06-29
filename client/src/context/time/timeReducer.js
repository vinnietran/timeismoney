import {
  GET_TIMES,
  ADD_TIME,
  DELETE_TIME,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TIME,
  FILTER_TIMES,
  CLEAR_FILTER,
  TIME_ERROR,
  CLEAR_TIMES,
  GET_ALL_TIMES
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TIMES:
      case GET_ALL_TIMES:
      return {
        ...state,
        times: action.payload,
        loading: false
      };
    case ADD_TIME:
      return {
        ...state,
        times: [ action.payload, ...state.times],
        loading: false
      };
    case UPDATE_TIME:
      return {
        ...state,
        times: state.times.map(time =>
          time._id === action.payload._id ? action.payload : time
        ),
        loading: false
      };
    case DELETE_TIME:
      return {
        ...state,
        times: state.times.filter(time => time._id !== action.payload),
        loading: false
      };
      case CLEAR_TIMES:
        return {
          ...state, 
          times: null, 
          filtered: null,
          error: null, 
          current: null
        }
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
          return time.month.match(regex) || time.client.match(regex) || time.description.match(regex) ;
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
