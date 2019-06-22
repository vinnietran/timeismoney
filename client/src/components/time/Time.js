import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TimeItem from "./TimeItem";
import Spinner from "../layout/Spinner";
import AuthContext from "../../context/auth/authContext";
import TimeContext from "../../context/time/timeContext";

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
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">{user && user.firstName + "'s"} Time Entries</h4>
      </li>
      <Fragment>
        {times !== null && !loading ? (
          <TransitionGroup>
            {filtered !== null
              ? filtered.map(time => (
                  <CSSTransition timeout={2500} classNames="item">
                    <TimeItem key={time._id} time={time} />
                  </CSSTransition>
                ))
              : times.map(time => (
                  <CSSTransition
                    key={time._id}
                    timeout={5000}
                    classNames="item"
                  >
                    <TimeItem key={time._id} time={time} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </Fragment>
    </ul>
  );
};

export default Time;
