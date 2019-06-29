import React, { useContext, useEffect } from "react";
import Times from "../time/AllTimes";
import TimeForm from "../time/TimeForm";
import EditTime from "../time/EditTime";
import AuthContext from "../../context/auth/authContext";


const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
<div className="grid-9">
<div>
  <TimeForm />
  <EditTime />
</div>
<div>
  <Times />
</div>
</div>
  );
};

export default Home;
