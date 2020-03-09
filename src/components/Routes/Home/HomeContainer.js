import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    changeDay: 0
  };

  prevButton = () => {
    this.setState(state => ({
      changeDay: parseInt((state.changeDay - 1 + 3) % 3)
    }));
  };

  nextButton = () => {
    this.setState(state => ({
      changeDay: parseInt((state.changeDay + 1) % 3)
    }));
  };

  render() {
    const { changeDay } = this.state;
    return (
      <HomePresenter
        changeDay={changeDay}
        prevButton={this.prevButton}
        nextButton={this.nextButton}
      />
    );
  }
}
