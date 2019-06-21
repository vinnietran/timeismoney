import React, { useContext, useEffect } from 'react'
import Times from '../time/Time'; 
import TimeForm from '../time/TimeForm';
import TimeFilter from '../time/TimeFilter';
import AuthContext from '../../context/auth/authContext'; 

const Home = () => {
    const authContext = useContext(AuthContext); 

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, [])

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
