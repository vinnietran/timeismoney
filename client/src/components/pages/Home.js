import React, { useContext, useEffect } from "react";
import Times from "../time/Time";
import TimeForm from "../time/TimeForm";
import AddBtn from "../layout/AddBtn";
import TimeFilter from "../time/TimeFilter";
import EditTime from "../time/EditTime";
import AuthContext from "../../context/auth/authContext";
import ClientFilter from "../time/ClientFilter";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-9">
      <div className='row'>
        <div className='col s4'>
        <ClientFilter />
        </div>
        <div className='col s4'>
        <TimeFilter />
        </div>
        </div>
      <div>
        <TimeForm />
        <EditTime />
      </div>
      <div>
        <AddBtn />
        <Times />
      </div>
    </div>
  );
};

export default Home;
