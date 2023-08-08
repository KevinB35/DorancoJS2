import React from "react";

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
        <a style={{ ...liStyle, borderRight: "1px solid black" }} href='/jsx'>
          JSX
        </a>
        <a style={{ ...liStyle, borderRight: "1px solid black" }} href='/state'>
          State
        </a>
        <a style={{ ...liStyle, borderRight: "1px solid black" }} href='/props'>
          Props
        </a>
        <a
          style={{ ...liStyle, borderRight: "1px solid black" }}
          href='/counter'
        >
          Counter
        </a>
        <a style={{ ...liStyle, borderRight: "1px solid black" }} href='/form'>
          Form
        </a>
        <a style={liStyle} href='/tp'>
          TP
        </a>
      </nav>
    </div>
  );
};

export default Header;
