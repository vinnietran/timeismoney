import React, { useContext, useEffect } from 'react'
import Times from '../time/AllTimes'; 
import TimeForm from '../time/TimeForm';
import AddBtn from '../layout/AddBtn'
import TimeFilter from '../time/TimeFilter';
import EditTime from '../time/EditTime';
import AuthContext from '../../context/auth/authContext'; 
import GenerateInvoice from "../layout/GenerateInvoice";


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
               
               <AddBtn />
               <Times />
               
           </div>
           <TimeFilter />
        <div className='row'>
          <div className='col s12'> 
              <GenerateInvoice />
            
        </div>
        </div>
        </div>
    )
}

export default Home
