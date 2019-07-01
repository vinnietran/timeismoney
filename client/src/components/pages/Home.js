import React, { useContext, useEffect } from "react";
import Times from "../time/Time";
import TimeForm from "../time/TimeForm";
import AddBtn from "../layout/AddBtn";
import EditTime from "../time/EditTime";
import AuthContext from "../../context/auth/authContext";


const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //allowing access from anywhere
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-9">
     
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
