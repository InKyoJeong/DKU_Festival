import React from "react";
import PropTypes from "prop-types";
// state가 필요없는 컴포넌트의 경우 class형이 아니여도 됨
function Detail({ id, name, day, pic }) {
  return (
    <div className="singer">
      <h1 className="singer__day">{day}</h1>

      <img src={pic[0]} alt={name[0]} title={name[0]} />
      <img src={pic[1]} alt={name[1]} title={name[1]} />
      <img src={pic[2]} alt={name[2]} title={name[2]} />
      <h3 className="singer__name">{name[0]}</h3>
      <h3 className="singer__name1">{name[1]}</h3>
      <h3 className="singer__name1">{name[2]}</h3>
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  pic: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Detail;
