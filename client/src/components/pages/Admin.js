import React, { useContext, useEffect } from 'react'
import Times from '../time/AllTimes'; 
import TimeForm from '../time/TimeForm';
import AddBtn from '../layout/AddBtn'
import TimeFilter from '../time/TimeFilter';
import EditTime from '../time/EditTime';
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
               <EditTime />
           </div>
           <div>
               <TimeFilter />
               <AddBtn />
               <Times />
               
           </div>
        </div>
    )
}

export default Home
