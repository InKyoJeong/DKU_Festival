import React from "react";
import ClockPresenter from "./ClockPresenter";

class Clock extends React.Component {
  state = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  };
  interValSet;

  count = toDate => {
    const now = new Date();

    let gap = toDate.getTime() - now.getTime();
    if (gap < 0) {
      clearInterval(this.interValSet);
      this.setState({
        ...this.state,
        day: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
      });
    } else {
      let days = 0;
      let hours = 0;
      let mins = 0;
      let secs = 0;
      gap = Math.floor(gap / 1000);
      days = Math.floor(gap / 86400); // 1day =  86400s
      gap = gap % 86400;
      hours = Math.floor(gap / 3600); //1h = 3600s
      gap = gap % 3600;
      mins = Math.floor(gap / 60); // 1m = 60s
      gap = gap % 60;
      secs = Math.floor(gap);
      this.setState({
        ...this.state,
        days,
        hours,
        minutes: mins,
        seconds: secs
      });
    }
  };
  componentDidMount() {
    const until = new Date("2020/05/10");
    this.interValSet = setInterval(() => {
      this.count(until);
    }, 1000);
  }
  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <ClockPresenter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}

export default Clock;
