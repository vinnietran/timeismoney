import React, { Fragment, useContext } from 'react'
import TimeItem from './TimeItem';
import TimeContext from '../../context/time/timeContext'; 

const Time = () => {
    const timeContext = useContext(TimeContext); 

    const { times } = timeContext
    return (
       <Fragment>
           {times.map(time => (
           <TimeItem key={time.id} time={time}/>
           ))}
       </Fragment>
    )
}

export default Time
