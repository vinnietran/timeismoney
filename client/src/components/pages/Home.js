import React from 'react'
import Times from '../time/Time'; 
import TimeForm from '../time/TimeForm';
import TimeFilter from '../time/TimeFilter';

const Home = () => {
    return (
        <div className="grid-2">
           <div>
               <TimeForm />
           </div>
           <div>
               <TimeFilter />
               <Times />
           </div>
        </div>
    )
}

export default Home
