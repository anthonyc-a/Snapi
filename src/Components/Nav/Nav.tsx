import React from "react";
import "./Nav.css";

const Nav = ({ active, setActive }: any) => {
  const Navigation: React.FC = () => {
    const divs = [];

    for (let i = 0; i < 5; i++) {
      divs.push(
        <div
          key={i}
          className={i === active ? "nav-dot active" : "nav-dot"}
          onClick={() => {}}
        ></div>
      );
    }

    return <div>{divs}</div>;
  };

  if (active < 2) return <div className="nav">{Navigation(active)}</div>;
};

export default Nav;
