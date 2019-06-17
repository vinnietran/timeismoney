import React, { useReducer } from 'react'; 
import uuid from 'uuid'; 
import timeContext from './timeContext';
import timeReducer from './timeReducer';
import { 
    ADD_TIME,
    DELETE_TIME,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_TIME,
    FILTER_TIMES,
    CLEAR_FILTER
} from '../types'

const TimeState = props => {
    const initialState = {
        times: [ {
            "_id": "5d03e96a29f8432c9c90ccf4",
            "month": "April",
            "client": "Robot",
            "hours": 4,
            "description": "Worked on payroll",
            "user": "5d03d0c6d2a94725377d91c7",
            "date": "2019-06-14T18:37:30.906Z",
            "__v": 0
        },
        {
            "_id": "5d03e84229f8432c9c90ccf3",
            "month": "January",
            "client": "Pizza Pizzas",
            "hours": 10,
            "description": "Worked on payroll and tax reconciliations",
            "user": "5d03d0c6d2a94725377d91c7",
            "date": "2019-06-14T18:32:34.037Z",
            "__v": 0
        }]
    };

    const [state, dispatch] = useReducer(timeReducer, initialState); 

    // Add Time

    // Delete Time

    // Set current Time

    // Clear Current Time

    // Update Time

    // Filter Time

    // Clear Filter 

    return (
        <timeContext.Provider
            value={{
                times: state.times
            }}
            >
            {props.children}
        </timeContext.Provider>
    )
}; 

export default TimeState; 