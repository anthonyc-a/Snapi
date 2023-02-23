import React from "react";

interface Props {
  icon: any;
  header: string;
  description: string;
}

const GridItem: React.FC<Props> = ({ icon, header, description }) => {
  return (
    <div className="grid-item">
      <svg>{icon}</svg>
      <h5>{header}</h5>
      <p>{description}</p>
    </div>
  );
};

export default GridItem;
