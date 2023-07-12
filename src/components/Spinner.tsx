import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="grid place-content-center">
      <div className="w-12 h-12 animate-spin">
        <ArrowPathIcon />
      </div>
    </div>
  );
};

export default Spinner;
