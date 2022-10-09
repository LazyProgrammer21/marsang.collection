import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => (
  <div className="wrapper region-md flow-md">
    <h3 className="h3 hero-title text-center">
      Welcome to boilerplate messages app
    </h3>
    <div className="flex split-center">
      <Link to="/messages" className="primary-button">
        VIEW MESSAGES
      </Link>
    </div>
  </div>
);

export default FrontPage;
