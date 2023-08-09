import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const liStyle = {
    display: "inline-block",
    padding: "0 0.5rem",
    minWidth: "12rem",
    textAlign: "center",
    color: "white",
    textDecoration: "none",
  };

  return (
    <>
      <div
        style={{
          padding: 20,
          textAlign: "center",
          background: "#2980b9",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        <nav style={{ listStyle: "none" }}>
          <Link style={{ ...liStyle, borderRight: "1px solid black" }} to='jsx'>
            JSX
          </Link>
          <Link
            style={{ ...liStyle, borderRight: "1px solid black" }}
            to='state'
          >
            State
          </Link>
          <Link
            style={{ ...liStyle, borderRight: "1px solid black" }}
            to='props'
          >
            Props
          </Link>
          <Link
            style={{ ...liStyle, borderRight: "1px solid black" }}
            to='counter'
          >
            Counter
          </Link>
          <Link
            style={{ ...liStyle, borderRight: "1px solid black" }}
            to='form'
          >
            Form
          </Link>
          <Link style={{ ...liStyle, borderRight: "1px solid black" }} to='tp'>
            TP
          </Link>
          <Link
            style={{ ...liStyle, borderRight: "1px solid black" }}
            to='article/1'
            state={{ title: "Page de l'article" }}
          >
            Article
          </Link>
          <Link style={liStyle} to='class'>
            Classes
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
