import React, { Component } from "react";

export default class Enfant extends Component {
  render() {
    const { handleParentStateChange } = this.props;

    const handleClick = () => {
      handleParentStateChange("State modifié depuis le composant enfant");
    };

    return <button onClick={handleClick}>Modifier le state</button>;
  }
}
