import React from 'react'
import Times from '../time/Time'; 
import TimeForm from '../time/TimeForm';
const Home = () => {
    return (
        <div className="grid-2">
           <div>
               <TimeForm />
           </div>
           <div>
               <Times />
           </div>
        </div>
    )
}

export default Home
