import React, { Component } from "react";
import Enfant from "./Enfant";

export default class ParentClasse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Titre depuis le parent",
    };
  }

  handleChange = (newTitle) => {
    this.setState({ title: newTitle });
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <Enfant handleParentStateChange={this.handleChange} />
      </div>
    );
  }
}
