import React from "react";
import Detail from "./Detail";
import "./LineUp.css";

class LineUp extends React.Component {
  state = {
    singers: [
      {
        id: 1,
        day: "5/10",
        name: ["첫번째", "dd"],
        image: [
          "http://www.hongikfestival.com/assets/line_up-07-min-2de21d21376e94c350c8d46c4ada578f005aa5ca82a30b046b808d61540e523f.png",
          "http://www.hongikfestival.com/assets/line_up-07-min-2de21d21376e94c350c8d46c4ada578f005aa5ca82a30b046b808d61540e523f.png"
        ]
      },
      {
        id: 2,
        day: "5/11",
        name: ["gg", "hh"],
        image: [
          "http://www.hongikfestival.com/assets/line_up-07-min-2de21d21376e94c350c8d46c4ada578f005aa5ca82a30b046b808d61540e523f.png",

          "http://www.hongikfestival.com/assets/line_up-07-min-2de21d21376e94c350c8d46c4ada578f005aa5ca82a30b046b808d61540e523f.png"
        ]
      },
      {
        id: 3,
        day: "5/12",
        name: ["가수이름3"],
        image: [
          "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
          "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
          "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg"
        ]
      }
    ]
  };

  render() {
    const { singers } = this.state;
    return (
      <section className="container">
        <div className="singers">
          {singers.map(getSinger => (
            <Detail
              key={getSinger.id}
              pic={getSinger.image}
              id={getSinger.id}
              day={getSinger.day}
              name={getSinger.name}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default LineUp;
