import "./Card.css";
import { RiBarChartBoxFill } from "react-icons/ri";

const Card = ({ text }) => {
  return (
    <div className="card">
      <p>
        <RiBarChartBoxFill className="card-icon" />
        {text}
      </p>
    </div>
  );
};

export default Card;
