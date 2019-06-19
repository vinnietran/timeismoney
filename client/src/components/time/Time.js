import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TimeItem from "./TimeItem";
import TimeContext from "../../context/time/timeContext";

const Time = () => {
  const timeContext = useContext(TimeContext);

  const { times, filtered } = timeContext;

  if (times.length === 0) {
    return <h4>Please Add a Time Entry</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(time => <TimeItem key={time.id} time={time} />)
        : times.map(time => <TimeItem key={time.id} time={time} />)}
    </Fragment>
  );
};

export default Time;
