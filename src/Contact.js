import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
const Contact = (props) => {
  let history = useHistory();
  let location = useLocation();
  let match = useParams();

  return (
    <div>
      <h1>You can find the detail of your path here: {location.pathname}</h1>
      <p>This page is from {match.name}</p>
      <button onClick={() => history.push("/")}>Home</button>
    </div>
  );
};
export default Contact;

// users =[
//   {username:"react",
//   images: "https://imgadkhfs"
// }
// ]
