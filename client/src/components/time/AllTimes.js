import React, { Fragment, useContext, useEffect } from "react";
import TimeItem from "./TimeItem";
import Spinner from "../layout/Spinner";
import AuthContext from "../../context/auth/authContext";
import TimeContext from "../../context/time/timeContext";

const Time = () => {
  const authContext = useContext(AuthContext);
  const timeContext = useContext(TimeContext);

  const { times, filtered, getAllTimes, loading } = timeContext;
  const { user } = authContext;

  useEffect(() => {
    getAllTimes();
    // eslint-disable-next-line
  }, []);

  if (times !== null && times.length === 0 && !loading) {
    return <h4>Please Add a Time Entry</h4>;
  }

  return (
    <div>
      
      <h4 className="center">{user && user.firstName + "'s"} Time Entries</h4>
      <div>
        <table className='highlight'>
          <thead>
            <tr>
              <td>Client</td>
              <td>Month</td>
              <td>Hours Worked</td>
              <td>Description</td>
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
