import React from "react";
import Switch from "react-switch";
import "./Switch.css";

export default class SwitchDark extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    if (this.state.checked) {
      console.log(this.state.checked);
    } else {
      console.log(this.state.checked);
    }

    return (
      <div className="example">
        <label>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
          />
        </label>
      </div>
    );
  }
}
