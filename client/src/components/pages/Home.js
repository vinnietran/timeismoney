import React, { useContext, useEffect } from "react";
import Times from "../time/Time";
import TimeForm from "../time/TimeForm";
import AddBtn from "../layout/AddBtn";
import EditBtn from "../layout/EditBtn";
import TimeFilter from "../time/TimeFilter";
import EditTime from "../time/EditTime";
import AuthContext from "../../context/auth/authContext";
import ClientFilter from "../time/ClientFilter";
import DescriptionFilter from "../time/DescriptionFilter";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-9">
      <div className='row'>
      <div className='col s1'></div>
        <div className='col s3'>
        <ClientFilter />
        </div>
        <div className='col s1'></div>
        <div className='col s3'>
        <TimeFilter />
        </div>
        <div className='col s1'></div>
        <div className='col s3'>
        <DescriptionFilter />
        </div>
       
        </div>
      <div>
        <TimeForm />
        <EditTime />
      </div>
      <div>
        <AddBtn />
        <EditBtn />
        <Times />
      </div>
    </div>
  );
};

export default Home;
