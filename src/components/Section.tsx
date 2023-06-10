import React from "react";
import Card from "./Card";
import { ServiceType } from "../types";

const Section: React.FC = () => {
  const services: ServiceType[] = [
    {
      title: "Brand Identity",
      description:
        "We create unique and powerfull brand indentities that help companies achieve their goals and stand out amongst the competiton",
    },
    {
      title: "Web Design",
      description:
        "We create unique and powerfull brand indentities that help companies achieve their goals and stand out amongst the competiton",
    },
    {
      title: "Mobile Design",
      description:
        "We create unique and powerfull brand indentities that help companies achieve their goals and stand out amongst the competiton",
    },
    {
      title: "Illustration",
      description:
        "We create unique and powerfull brand indentities that help companies achieve their goals and stand out amongst the competiton",
    },
    {
      title: "Icongraphy",
      description:
        "We create unique and powerfull brand indentities that help companies achieve their goals and stand out amongst the competiton",
    },
    {
      title: "Development",
      description:
        "We create unique and powerfull brand indentities that help companies achieve their goals and stand out amongst the competiton",
    },
  ];
  return (
    <div className="services">
      {services.map((service, idx) => {
        return (
          <Card
            key={idx}
            title={service.title}
            description={service.description}
          />
        );
      })}
    </div>
  );
};

export default Section;
