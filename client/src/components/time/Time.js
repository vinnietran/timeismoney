import React, { Fragment, useContext, useEffect } from "react";
import TimeItem from "./TimeItem";
import Spinner from "../layout/Spinner";
import AuthContext from "../../context/auth/authContext";
import TimeContext from "../../context/time/timeContext";
import ClientFilter from "../time/ClientFilter";
import DescriptionFilter from "../time/DescriptionFilter";
import TimeFilter from "../time/TimeFilter";
import ClearFilter from "../layout/ClearFilter";

const Time = () => {
  const authContext = useContext(AuthContext);
  const timeContext = useContext(TimeContext);

  const { times, filtered, getTimes, loading } = timeContext;
  const { user } = authContext;

  useEffect(() => {
    getTimes();
    // eslint-disable-next-line
  }, []);

  if (times !== null && times.length === 0 && !loading) {
    return <h4>Please Add a Time Entry</h4>;
  }

  return (
    <div>
      
      <h4 className="center">{user && user.firstName + "'s"} Time Entries</h4>
      <div className='row timeTbl'>
      <div className='col s1'></div>
        <div className='col s3'>

        <ClientFilter />
        </div>
        <div className='col s1'></div>
        <div className='col s3'>
        <TimeFilter />
        </div>
        <div className='col s1'></div>
        <div className='col s3'>
        <DescriptionFilter />
        </div>
        </div>
        <div className='row'>
        <div className='col s4'></div>
        <div className='col s4'>
        <ClearFilter />
        </div>
        <div className='col s4'></div>
        </div>
      <div>
        <table className='centered z-depth-5 timeTbl'>
          <thead className='centered'>
            <tr>
              <td><h5>Client</h5></td>
              <td><h5>Month</h5></td>
              <td><h5>Hours Worked</h5></td>
              <td><h5>Description</h5></td>
              <td><h5>Edit</h5></td>
              <td><h5>Delete</h5></td>
            </tr>
          </thead>          
              <Fragment>
                {times !== null && !loading ? (
                  <tbody>
                    {filtered !== null
                      ? filtered.map(time => (
                          
                            <TimeItem key={time._id} time={time} />
                          
                        ))
                      : times.map(time => (
                         
                            <TimeItem key={time._id} time={time} />
                         
                        ))}
                  </tbody>
                ) : (
                  <Spinner />
                )}
               
              </Fragment>
            
          
        </table>
       
      </div>
    
    </div>
  );
};

export default Time;
