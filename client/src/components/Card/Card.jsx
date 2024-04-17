import "./Card.css";
import { RiBarChartBoxFill } from "react-icons/ri";

const Card = ({ text }) => {
  return (
    <div className="card">
      <RiBarChartBoxFill className="card-icon" />
      <p>{text}</p>
    </div>
  );
};

export default Card;
