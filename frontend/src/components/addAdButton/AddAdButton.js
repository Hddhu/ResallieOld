import React from "react";
import { Link } from "react-router-dom";
import "./AddAdButton.css";

const AddAdButton = () => {
  return (
    <Link
      to={{
        pathname: `/maakadvertentie`,
      }}
      target="_self"
    >
      <button className="button">Maak resale</button>
    </Link>
  );
};

export default AddAdButton;
