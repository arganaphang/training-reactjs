import React from "react";
import { ServiceType } from "../types";

const Card: React.FC<ServiceType> = ({ title, description }) => {
  return (
    <div className="card">
      <div className="icon"></div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
