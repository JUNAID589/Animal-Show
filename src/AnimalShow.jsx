import bird from "./svgs/bird.svg";
import cat from "./svgs/cat.svg";
import dog from "./svgs/dog.svg";
import cow from "./svgs/cow.svg";
import gator from "./svgs/gator.svg";
import horse from "./svgs/horse.svg";
import heart from "./svgs/heart.svg";
import './AnimalShow.css'
import { useState } from "react";
const AnimalShow = ({ type }) => {
  const svgMap = {
    cat: cat,
    dog: dog,
    cow: cow,
    gator: gator,
    horse: horse,
    bird: bird,
  };
  const [imageClicks, setImageClicks] = useState(0);
  const handleClick = () => {
    setImageClicks(imageClicks + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img src={svgMap[type]} alt="animal" className="animal" />
      <img src={heart} alt="heart" 
	  style={{ width: 10 + 10 * imageClicks + "px" }} className="heart" />
    </div>
  );
};

export default AnimalShow;
