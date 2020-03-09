import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeDay: 0
      // changeDayOfWeek: "월"
    };
  }

  prevButton = () => {
    this.setState(state => ({
      changeDay: parseInt((state.changeDay - 1 + 3) % 3)
    }));
    //   if(this.state.changeDayOfWeek.day === "월"){
    //     this.state.changeDayOfWeek.day = "수";
    //   }else if(this.state.changeDayOfWeek === "화"){
    //     this.state.changeDayOfWeek.day = "월";
    // }else{
    //   this.state.changeDayOfWeek.day = "화";
    // }
  };

  nextButton = () => {
    this.setState(state => ({
      changeDay: parseInt((state.changeDay + 1) % 3)
      // changeDayOfWeek: (state.changeDayOfWeek = state.changeDayOfWeek[2])
    }));
  };

  render() {
    const {
      changeDay
      // changeDayOfWeek
    } = this.state;
    return (
      <HomePresenter
        changeDay={changeDay}
        prevButton={this.prevButton}
        nextButton={this.nextButton}
        // changeDayOfWeek={changeDayOfWeek}
      />
    );
  }
}
