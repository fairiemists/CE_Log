import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/ce_log/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCredits(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCredits();
  }, [token]);
  return (

    <div className="container">
      <h1>Welcome {user.first_name} {user.last_name}!</h1>

    </div>
  );
};

export default HomePage;
