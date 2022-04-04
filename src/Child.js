import React, { Fragment } from "react";

class Child extends React.Component {
  render() {
    return (
      <>
        <h3>This is {this.props.name} component</h3>
        <p>My age is {this.props.propsage}</p>
      </>
    );
  }
}
export default Child;
