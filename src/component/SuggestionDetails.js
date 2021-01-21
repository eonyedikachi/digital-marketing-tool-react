import React, { useEffect, useState } from "react";
import AdminLeftSidebar from "./adminleftsidebar";
import axios from "axios";

const SuggestionDetails = () => {
  const token = localStorage.getItem("Token");
  const [suggestions, setSuggestions] = useState([]);
  var sId = localStorage.getItem('sId');
  // const userSuggestion = suggestions.sId;
  // const totalUsers = suggestions.length;
  useEffect(() => {
    axios
      .get(`https://martreach.herokuapp.com/api/suggestions/${sId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(suggestions.message)

  return (
    <div>
      <AdminLeftSidebar />
      <div className="main">
        <h1>{suggestions.message}</h1>
        <h3>Replies</h3>
        <button className="bttn">Reply</button>
      </div>
    </div>
  );
};

export default SuggestionDetails;
