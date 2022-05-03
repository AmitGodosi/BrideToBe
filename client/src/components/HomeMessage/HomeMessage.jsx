import React from "react";
import "./HomeMessage.scss";
import { Link } from "react-router-dom";

const HomeMessage = () => {
  return (
    <div className="home-message">
      <h2>BRIDAL COUTURE</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quo
        perspiciatis incidunt assumenda accusantium consectetur consequuntur
        veniam, iure laborum maiores repudiandae deserunt, aspernatur minima
        tenetur eligendi ipsam inventore asperiores. Cum.
      </p>
      <div className="home-message-links">
        <Link to="/login" style={{ textDecoration: "none" }}>
          SIGN IN NOW!
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          DONT WAIT, SIGNUP QUICKLY!
        </Link>
      </div>
    </div>
  );
};

export default HomeMessage;
