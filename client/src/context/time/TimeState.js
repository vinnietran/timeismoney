import React, { useReducer } from "react";
import axios from "axios";
import timeContext from "./timeContext";
import timeReducer from "./timeReducer";
import {
GET_TIMES,
  ADD_TIME,
  DELETE_TIME,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TIME,
  FILTER_TIMES,
  CLEAR_TIMES,
  CLEAR_FILTER,
  TIME_ERROR
} from "../types";

const TimeState = props => {
  const initialState = {
    times: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(timeReducer, initialState);

  // Get times
  const getTimes = async () => {

    try {
      const res = await axios.get("/api/time");

      dispatch({ type: GET_TIMES, 
        payload: res.data
     });
    } catch (err) {
      dispatch({
        type: TIME_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Time
  const addTime = async time => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/time", time, config);

      dispatch({ type: ADD_TIME, payload: res.data });
    } catch (err) {
      dispatch({
        type: TIME_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Time
  const deleteTime = id => {
    dispatch({ type: DELETE_TIME, payload: id });
  };

  // Clear Times
  const clearTimes = () => {
    dispatch({ type: CLEAR_TIMES });
  };

  // Set current Time
  const setCurrent = time => {
    dispatch({ type: SET_CURRENT, payload: time });
  };

  // Clear Current Time
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Time
  const updateTime = time => {
    dispatch({ type: UPDATE_TIME, payload: time });
  };
  // Filter Time
  const filterTimes = text => {
    dispatch({ type: FILTER_TIMES, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <timeContext.Provider
      value={{
        times: state.times,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addTime,
        deleteTime,
        setCurrent,
        clearCurrent,
        updateTime,
        filterTimes,
        clearFilter,
        getTimes,
        clearTimes

      }}
    >
      {props.children}
    </timeContext.Provider>
  );
};

export default TimeState;
