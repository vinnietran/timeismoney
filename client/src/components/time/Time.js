import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(time => (
              <CSSTransition  timeout={2500} classNames="item">
                <TimeItem key={time.id} time={time} />
              </CSSTransition>
            ))
          : times.map(time => (
              <CSSTransition key={time.id} timeout={5000} classNames="item">
                <TimeItem key={time.id} time={time} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Time;
